import { clsx } from 'clsx'
import {useState} from "react";
interface Props {}

function Component({}: Props) {
  const [data, setData] = useState([
    {
      productName: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: '$2999',
    },
    {
      productName: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      price: '$1999',
    },
    {
      productName: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      price: '$99',
    },
  ])

  return <div className={clsx('p-4')}>
    <table className={clsx('table-fixed')}>
      <thead>
      <tr className={clsx('uppercase text-left bg-cgray')}>
        <th className={clsx('w-64 py-2 px-5')}>product name</th>
        <th className={clsx('w-20 py-2 px-5')}>color</th>
        <th className={clsx('w-28 py-2 px-5')}>category</th>
        <th className={clsx('w-36 py-2 px-5')}>price</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item) => {
          return <tr className={clsx('border-b')} key={item.productName}>
            <td className={clsx('py-2 px-5')}>{item.productName}</td>
            <td className={clsx('py-2 px-5')}>{item.color}</td>
            <td className={clsx('py-2 px-5')}>{item.category}</td>
            <td className={clsx('py-2 px-5')}>{item.price}</td>
          </tr>
        })
      }
      </tbody>
    </table>
  </div>
}

export default Component
