import {
  chainInstanceAtom,
  currentTaskAtom,
  destinationAccountAtom,
  fromAmountAtom,
  fromAssetAtom,
  fromChainAtom,
  solutionAtom,
} from '@/store/core'
import {EvmChain, SubstrateChain} from '@phala/index'
import {polkadotAccountAtom} from '@phala/store'
import {isHex, u8aToHex} from '@polkadot/util'
import {decodeAddress} from '@polkadot/util-crypto'
import Decimal from 'decimal.js'
import {useAtom} from 'jotai'
import {useEthersBrowserProvider} from './useEthersProvider'

const useDeposit = (): (({
  onSubmitted,
}: {
  onSubmitted?: () => void
}) => Promise<void>) => {
  const [fromChain] = useAtom(fromChainAtom)
  const [fromAsset] = useAtom(fromAssetAtom)
  const [fromAmount] = useAtom(fromAmountAtom)
  const [solution] = useAtom(solutionAtom)
  const [destinationAccount] = useAtom(destinationAccountAtom)
  const ethersProvider = useEthersBrowserProvider()
  const [polkadotAccount] = useAtom(polkadotAccountAtom)
  const [chainInstance] = useAtom(chainInstanceAtom)
  const [, setCurrentTask] = useAtom(currentTaskAtom)

  return async ({onSubmitted}) => {
    if (
      fromAmount.length === 0 ||
      solution == null ||
      chainInstance == null ||
      fromChain == null ||
      fromAsset == null
    ) {
      throw new Error('Deposit missing required parameters')
    }

    const hexAddress = isHex(destinationAccount)
      ? destinationAccount
      : u8aToHex(decodeAddress(destinationAccount))

    const amount = BigInt(
      new Decimal(fromAmount)
        .times(Decimal.pow(10, fromAsset.decimals))
        .toHex(),
    )

    if (chainInstance instanceof EvmChain) {
      const deposit = await chainInstance.getDeposit(
        fromAsset.location,
        amount,
        hexAddress,
        solution,
      )

      if (ethersProvider != null) {
        const signer = await ethersProvider.getSigner()
        const tx = await signer.sendTransaction(deposit.tx)
        setCurrentTask({
          id: deposit.id,
          fromChainId: fromChain.name,
          hash: tx.hash,
        })
        onSubmitted?.()
        await tx.wait()
      }
    } else if (
      chainInstance instanceof SubstrateChain &&
      polkadotAccount?.wallet != null
    ) {
      await chainInstance.isReady
      const deposit = await chainInstance.getDeposit(
        fromAsset.location,
        amount,
        hexAddress,
        solution,
      )
      const waitFinalized = async (): Promise<void> => {
        await new Promise((resolve, reject) => {
          void deposit.tx
            .signAndSend(
              polkadotAccount.address,
              {
                signer: polkadotAccount.wallet?.signer,
              },
              ({txHash, status}) => {
                if (status.isReady) {
                  onSubmitted?.()
                  setCurrentTask({
                    id: deposit.id,
                    fromChainId: fromChain.name,
                    hash: txHash.toHex(),
                  })
                } else if (status.isInBlock) {
                  resolve(undefined)
                }
              },
            )
            .catch(reject)
        })
      }

      await waitFinalized()
    } else {
      throw new Error('Deposit not ready')
    }
  }
}

export default useDeposit
