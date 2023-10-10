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
    {
     productName: 'Google Pixel Phone',
      color: 'Gray',
      category: 'Phone',
      price: '$799',
      action:''
    },{
      productName: 'Apple Watch 5',
      color: 'Red',
      category: 'Wearables',
      price: '$999',
      action:''
    }
  ])


  return <div className={clsx('p-4')}>
    <table className={clsx('table-fixed')}>
      <thead>
        <tr className={clsx('bg-cgray uppercase text-left')}>
          <th className={clsx('w-52 p-2')}>product name</th>
          <th className={clsx('w-28 p-2')}>color</th>
          <th className={clsx('w-36 p-2')}>category</th>
          <th className={clsx('w-28 p-2')}>price</th>
          <th className={clsx('w-28 p-2')}>action</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((item,index) => {
          return <tr key={item.productName} className={clsx('even:bg-cgray',index!==data.length-1&&'border-b')}>
            <td className={clsx('p-2')}>{item.productName}</td>
            <td className={clsx('p-2')}>{item.color}</td>
            <td className={clsx('p-2')}>{item.category}</td>
            <td className={clsx('p-2')}>{item.price}</td>
            <td className={clsx('p-2')}>
              <a href="" className={clsx('text-blue-600 hover:underline')}>
                Edit
              </a>
            </td>
          </tr>
        })
      }
      </tbody>
    </table>
  </div>
}

export default Component
