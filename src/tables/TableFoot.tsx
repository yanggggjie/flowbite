import { clsx } from 'clsx'
import {useState} from "react";
interface Props {}

function Component({}: Props) {
  const [data, setData] = useState([
    {
      productName: 'Apple MacBook Pro 17"',
      qty: 1,
      price: 2999,
    },{
      productName: 'Microsoft Surface Pro',
      qty: 1,
      price: 1999,
    },{
      productName: 'Magic Mouse 2',
      qty: 1,
      price: 99,
    }
  ])
  return <div>
    <table>
      <thead>
      <tr className={clsx('uppercase bg-cgray text-left')}>
        <th className={clsx('w-96 p-3')}>product name</th>
        <th className={clsx('w-36 p-3')}>qty</th>
        <th className={clsx('w-36 p-3')}>price</th>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item) => {
          return <tr key={item.productName}>
            <td className={clsx('p-3')}>{item.productName}</td>
            <td className={clsx('p-3')}>{item.qty}</td>
            <td className={clsx('p-3')}>{'$'}{item.price}</td>
          </tr>
        })
      }
      </tbody>
      <tfoot>
      <tr className={clsx('font-bold')}>
        <td className={clsx('p-3')}>Total</td>
        <td className={clsx('p-3')}>{
          data.reduce((acc,item) => {
            return acc+item.qty
          },0)
        }</td>
        <td className={clsx('p-3')}>
          {
            data.reduce((acc, item) => {
              return acc+item.price*item.qty
            },0)
          }
        </td>
      </tr>
      </tfoot>
    </table>

  </div>
}

export default Component
