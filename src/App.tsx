import { clsx } from 'clsx'
import Test from '@components/Test.js'
import TablewithModal from '@/tables/TablewithModal.js'
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <Test></Test>
      <TablewithModal></TablewithModal>
    </div>
  )
}

export default Component
