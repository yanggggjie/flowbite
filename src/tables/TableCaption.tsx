import { clsx } from 'clsx'
import {useState} from "react";
interface Props {}

function Component({}: Props) {
  const [caption, setCaption] = useState({
    title:'Our products',
    description:`Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.`})
  const [data, setData] = useState([   {
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
    },])
  return <div className={clsx('p-4')}>
    <table >
      <caption className={clsx('py-2')}>
        <h1 className={clsx('text-left text-2xl')}>{caption.title}</h1>
        <p className={clsx('text-left')}>{caption.description}</p>
      </caption>
      <thead>
      <tr className={clsx('bg-cgray uppercase text-left')}>
        <th className={clsx('pr-5 py-2')}>product name</th>
        <th className={clsx('pr-5 py-2')}>color</th>
        <th className={clsx('pr-5 py-2')}>category</th>
        <th className={clsx('pr-5 py-2')}>price</th>
        <th className={clsx('pr-5 py-2')}>action</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item,index) => {
          return <tr  className={clsx(index!==data.length-1&&'border-b')} key={item.productName}>
            <td  className={clsx('pr-5 py-2')}>{item.productName}</td>
            <td  className={clsx('pr-5 py-2')}>{item.color}</td>
            <td  className={clsx('pr-5 py-2')}>{item.category}</td>
            <td  className={clsx('pr-5 py-2')}>{item.price}</td>
            <td  className={clsx('pr-5 py-2')}>
              <a className={clsx('text-blue-600 hover:underline')} href="">
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
