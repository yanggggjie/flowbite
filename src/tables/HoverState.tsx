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
      action:''
    },
    {
      productName: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      price: '$1999',
      action:''
    },
    {
      productName: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      price: '$99',
      action:''
    },
  ])
  return <div>
    <table>
      <thead>
      <tr className={clsx('uppercase text-left bg-cgray')}>
        <th className={clsx('px-4 py-2')}>produce name</th>
        <th className={clsx('px-4 py-2')}>color</th>
        <th className={clsx('px-4 py-2')}>category</th>
        <th className={clsx('px-4 py-2')}>price</th>
        <th className={clsx('px-4 py-2')}>action</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item,index) => {
          return <tr className={clsx('hover:bg-cgray',
            index!==data.length-1&&'border-b'
          )}
                     key={item.productName}>
            <td className={clsx('px-4 py-2')}>{item.productName}</td>
            <td className={clsx('px-4 py-2')}>{item.color}</td>
            <td className={clsx('px-4 py-2')}>{item.category}</td>
            <td className={clsx('px-4 py-2')}>{item.price}</td>
            <td className={clsx('px-4 py-2')}>Edit</td>
          </tr>
        })
      }
      </tbody>
    </table>
  </div>
}

export default Component
