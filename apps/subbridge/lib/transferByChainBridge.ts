import {ASSETS, type AssetId} from '@/config/asset'
import {CHAINS, type ChainId} from '@/config/chain'
import type {ApiPromise} from '@polkadot/api'
import {u8aToHex} from '@polkadot/util'
import {decodeAddress} from '@polkadot/util-crypto'
import type {ContractTransaction, ethers} from 'ethers'

export const createChainBridgeData = async (
  khalaApi: ApiPromise,
  destinationAccount: string,
  amount: string,
  toChainId: ChainId,
): Promise<string> => {
  const {ethers, BigNumber} = await import('ethers')
  const isToKhala =
    toChainId === 'phala' || toChainId === 'khala' || toChainId === 'thala'
  const toChain = CHAINS[toChainId]
  const accountId = u8aToHex(decodeAddress(destinationAccount))
  let dest

  try {
    dest = khalaApi
      .createType('XcmV3MultiLocation', {
        // parents = 1 means we wanna send to other parachains or relaychain
        parents: isToKhala ? 0 : 1,
        interior: isToKhala
          ? {X1: {AccountId32: {id: accountId}}}
          : {X2: [{Parachain: toChain.paraId}, {AccountId32: {id: accountId}}]},
      })
      .toHex()
  } catch (err) {
    dest = khalaApi
      .createType('XcmV1MultiLocation', {
        // parents = 1 means we wanna send to other parachains or relaychain
        parents: isToKhala ? 0 : 1,
        interior: isToKhala
          ? {X1: {AccountId32: {network: 'Any', id: accountId}}}
          : {
              X2: [
                {Parachain: toChain.paraId},
                {AccountId32: {network: 'Any', id: accountId}},
              ],
            },
      })
      .toHex()
  }

  const data = ethers.utils.hexConcat([
    ethers.utils.hexZeroPad(BigNumber.from(amount).toHexString(), 32),
    ethers.utils.hexZeroPad(ethers.utils.hexlify((dest.length - 2) / 2), 32),
    dest,
  ])

  return data
}

export const transferByChainBridge = async ({
  contract,
  khalaApi,
  destinationAccount,
  amount,
  toChainId,
  assetId,
}: {
  contract: ethers.Contract
  khalaApi: ApiPromise
  destinationAccount: string
  assetId: AssetId
  amount: string
  toChainId: ChainId
}): Promise<ContractTransaction> => {
  const asset = ASSETS[assetId]
  const resourceId =
    typeof asset.chainBridgeResourceId === 'string'
      ? asset.chainBridgeResourceId
      : asset.chainBridgeResourceId?.[toChainId]
  if (resourceId == null) {
    throw new Error('Transfer missing required parameters')
  }
  // TODO: make deposit chain configurable
  const depositChainId = toChainId === 'phala' ? 3 : 1
  return contract.deposit(
    depositChainId,
    resourceId,
    await createChainBridgeData(
      khalaApi,
      destinationAccount,
      amount,
      toChainId,
    ),
  )
}
