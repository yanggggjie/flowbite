import { clsx } from 'clsx'
import {useState} from "react";
interface Props {}

function Component({}: Props) {

  const [data, setData] = useState([
    {
      productName: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: '$2999'
    },
    {
      productName: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      price: '$1999'
    },
    {
      productName: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      price: '$99'
    },
    {
      productName: 'Google Pixel Phone',
      color: 'Gray',
      category: 'Phone',
      price: '$799'
    },
    {
      productName: 'Apple Watch 5',
      color: 'Red',
      category: 'Wearables',
      price: '$999'
    }
  ])

  return <div className={clsx('p-4')}>
    <table className={clsx('')}>
      <thead>
      <tr className={clsx('uppercase text-left')}>
        <th className={clsx('p-2 w-52 bg-cgray')}>product name</th>
        <th className={clsx('p-2 w-28')}>color</th>
        <th className={clsx('p-2 w-36 bg-cgray')}>category</th>
        <th className={clsx('p-2 w-32')}>price</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item) => {
          return <tr className={clsx('border-t')} key={item.productName}>
            <td className={clsx('p-2 bg-cgray')}>{item.productName}</td>
            <td className={clsx('p-2')}>{item.color}</td>
            <td className={clsx('p-2 bg-cgray')}>{item.category}</td>
            <td className={clsx('p-2')}>{item.price}</td>
          </tr>
        })
      }
      </tbody>
    </table>
  </div>
}

export default Component
