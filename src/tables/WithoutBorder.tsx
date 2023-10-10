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
  return <div>
    <table>
      <thead>
      <tr className={clsx('uppercase text-left')}>
        <th className={clsx('py-3 px-5')}>product name</th>
        <th className={clsx('py-3 px-5')}>color</th>
        <th className={clsx('py-3 px-5')}>category</th>
        <th className={clsx('py-3 px-5')}>price</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item) => {
          return <tr key={item.productName}>
            <td className={clsx('py-3 px-5')}>{item.productName}</td>
            <td className={clsx('py-3 px-5')}>{item.color}</td>
            <td className={clsx('py-3 px-5')}>{item.category}</td>
            <td className={clsx('py-3 px-5')}>{item.price}</td>
          </tr>
        })
      }
      </tbody>
    </table>
  </div>
}

export default Component
