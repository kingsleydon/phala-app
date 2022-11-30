import DetailPage from '@/components/BasePool/DetailPage'
import {BasePoolKind} from '@/lib/subsquid'
import {NextPage} from 'next'
import {useRouter} from 'next/router'

const StakePool: NextPage = () => {
  const {
    query: {pid},
  } = useRouter()
  return (
    <>
      <DetailPage kind={BasePoolKind.StakePool} pid={pid} />
    </>
  )
}

export default StakePool
