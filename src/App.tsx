import { clsx } from 'clsx'
import Test from '@components/Test.js'
import TableFilter from '@/tables/TableFilter.js'
import TablePagination from '@/tables/TablePagination.js'
import CheckboxSelection from '@/tables/CheckboxSelection.js'
import TablewithUsers from '@/tables/TablewithUsers.js'
interface Props {}

function Component({}: Props) {
  return (
    <div>
      <Test></Test>
      <TablewithUsers></TablewithUsers>
    </div>
  )
}

export default Component
