import {ASSETS, nativeLocation, type AssetId} from '@/config/asset'
import {CHAINS, type ChainId, type SubstrateChain} from '@/config/chain'
import type {ApiPromise} from '@polkadot/api'
import type {SubmittableExtrinsic} from '@polkadot/api/types'
import type {ISubmittableResult} from '@polkadot/types/types'
import {u8aToHex} from '@polkadot/util'
import {decodeAddress} from '@polkadot/util-crypto'
import {createPhalaMultilocation} from './createPhalaMultilocation'
import {type Hex} from './getGeneralKey'

export const transferByPolkadotXTokens = ({
  polkadotApi,
  assetId,
  amount,
  fromChainId,
  toChainId,
  destinationAccount,
  proxy,
}: {
  polkadotApi: ApiPromise
  assetId: AssetId
  fromChainId: ChainId
  toChainId: ChainId
  amount: string
  destinationAccount: string
  proxy?: ChainId
}): SubmittableExtrinsic<'promise', ISubmittableResult> => {
  const asset = ASSETS[assetId]
  const fromChain = CHAINS[fromChainId] as SubstrateChain
  const toChain = CHAINS[toChainId]
  const isNativeAsset = fromChain.nativeAsset === assetId
  const location = isNativeAsset
    ? nativeLocation
    : asset.location?.[fromChain.relayChain]
  const generalIndex = toChain.kind === 'evm' ? toChain.generalIndex : null
  const xcmVersion = fromChainId === 'calamari' ? 'V1' : 'V3'
  const palletName = new Set<ChainId>(['astar', 'shiden']).has(fromChainId)
    ? 'xtokens'
    : 'xTokens'

  if (location == null || (proxy != null && typeof generalIndex !== 'number')) {
    throw new Error('Transfer missing required parameters')
  }

  return polkadotApi.tx[palletName].transferMultiasset(
    {
      [xcmVersion]: {
        id: {Concrete: location},
        fun: {Fungible: amount},
      },
    },
    {
      [xcmVersion]: {
        parents: 1,
        interior:
          proxy != null
            ? {
                X4: [
                  {Parachain: CHAINS[proxy].paraId},
                  ...createPhalaMultilocation(
                    'cb',
                    generalIndex as number,
                    destinationAccount as Hex,
                  ),
                ],
              }
            : {
                X2: [
                  {Parachain: toChain.paraId},
                  {
                    AccountId32: {
                      id: u8aToHex(decodeAddress(destinationAccount)),
                      network: xcmVersion === 'V1' ? 'Any' : undefined,
                    },
                  },
                ],
              },
      },
    },
    'Unlimited',
  )
}
