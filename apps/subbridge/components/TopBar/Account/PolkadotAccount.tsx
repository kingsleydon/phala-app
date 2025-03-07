import {useCurrentPolkadotApi} from '@/hooks/usePolkadotApi'
import {polkadotAvailableBalanceFetcher} from '@/lib/polkadotFetcher'
import {polkadotWalletModalOpenAtom} from '@/store/polkadotWalletModal'
import {polkadotAccountAtom} from '@phala/store'
import {toCurrency} from '@phala/util'
import {useAtom} from 'jotai'
import {type FC} from 'react'
import useSWR from 'swr'
import AccountTemplate from './AccountTemplate'

const PolkadotAccount: FC = () => {
  const [, setPolkadotWalletModalOpen] = useAtom(polkadotWalletModalOpenAtom)
  const [polkadotAccount] = useAtom(polkadotAccountAtom)
  const polkadotApi = useCurrentPolkadotApi()
  const {data} = useSWR(
    polkadotApi != null &&
      polkadotAccount != null && [polkadotApi, polkadotAccount.address],
    polkadotAvailableBalanceFetcher,
    {
      refreshInterval: 12000,
    },
  )

  const tokenSymbol = polkadotApi?.registry.chainTokens[0]

  const handleClick = (): void => {
    setPolkadotWalletModalOpen(true)
  }

  if (polkadotAccount == null) return null

  return (
    <AccountTemplate
      balance={
        tokenSymbol != null && data != null
          ? `${toCurrency(data)} ${tokenSymbol}`
          : undefined
      }
      account={polkadotAccount.name}
      ButtonProps={{onClick: handleClick}}
    />
  )
}

export default PolkadotAccount
