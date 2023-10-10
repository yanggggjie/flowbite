import { clsx } from 'clsx'
import {useState} from "react";
interface Props {}

function Component({}: Props) {
  const Icon = <svg className="w-3 h-3 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg>

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

  function addSortIcon(str:string) {
    return <a href={''} className={clsx('flex flex-row items-center')}>{str}{Icon}</a>
  }

  return <div>
    <table>
      <thead>
      <tr className={clsx('uppercase bg-cgray')}>
        <th className={clsx('p-4')}>{addSortIcon('product name')}</th>
        <th className={clsx('p-4')}>{addSortIcon('color')}</th>
        <th className={clsx('p-4')}>{addSortIcon('category')}</th>
        <th className={clsx('p-4')}>{addSortIcon('price')}</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item,index) => {
          return <tr key={item.productName}>
            <td className={clsx('p-4')}>{item.productName}</td>
            <td className={clsx('p-4')}>{item.color}</td>
            <td className={clsx('p-4')}>{item.category}</td>
            <td className={clsx('p-4')}>{item.price}</td>
          </tr>
        })
      }
      </tbody>
    </table>
  </div>
}

export default Component
