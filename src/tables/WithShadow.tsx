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
    <table className={clsx('')}>
      <thead>
      <tr className={clsx('uppercase text-left bg-cgray')}>
        <th className={clsx('rounded-tl-xl  py-2 px-5')}>product name</th>
        <th className={clsx('py-2 px-5')}>color</th>
        <th className={clsx('py-2 px-5')}>category</th>
        <th className={clsx('py-2 px-5')}> price</th>
        <th className={clsx('rounded-tr-xl py-2 px-5')}>action</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item,index) => {
          return <tr className={clsx(index!==data.length-1&&'border-b',index===data.length-1&&'shadow-xl rounded-xl')} key={item.productName}>
            <td className={clsx('py-2 px-5')}>{item.productName}</td>
            <td className={clsx('py-2 px-5')}>{item.color}</td>
            <td className={clsx('py-2 px-5')}>{item.category}</td>
            <td className={clsx('py-2 px-5')}>{item.price}</td>
            <td className={clsx('py-2 px-5')}>Edit</td>
          </tr>
        })
      }
      </tbody>
    </table>
  </div>
}

export default Component
