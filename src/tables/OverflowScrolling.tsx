import { clsx } from 'clsx'
import {useState} from "react";
interface Props {}
const initData = [
  {
    checked: false,
    productName: 'Apple MacBook Pro 17"',
    color: 'Silver',
    category: 'Laptop',
    accesories: 'Yes',
    available: 'Yes',
    price: '$2999',
    weight: '3.0 lb.',
    action: {
      edit: 'Edit',
      remove: 'Remove'
    }
  },{
    checked: false,
    productName: 'Microsoft Surface Pro',
    color: 'White',
    category: 'Laptop PC',
    accesories: 'No',
    available: 'Yes',
    price: '$1999',
    weight: '1.0 lb.',
    action: {
      edit: 'Edit',
      remove: 'Remove'
    }
  },{
    checked: false,
    productName: 'Magic Mouse 2',
    color: 'Black',
    category: 'Accessories',
    accesories: 'Yes',
    available: 'No',
    price: '$99',
    weight: '0.2 lb.',
    action: {
      edit: 'Edit',
      remove: 'Remove'

    }
  },{
    checked: false,
    productName: 'Apple Watch',
    color: 'Black',
    category: 'Watches',
    accesories: 'Yes',
    available: 'No',
    price: '$199',
    weight: '0.12 lb.',
    action: {
      edit: 'Edit',
      remove: 'Remove'
    }
  },{
    checked: false,
    productName: 'Apple iMac',
    color: 'Silver',
    category: 'PC',
    accesories: 'Yes',
    available: 'Yes',
    price: '$2999',
    weight: '7.0 lb.',
    action: {
      edit: 'Edit',
      remove: 'Remove'
    }
  },{
    checked: false,
    productName: 'Apple AirPods',
    color: 'White',
    category: 'Accessories',
    accesories: 'No',
    available: 'Yes',
    price: '$399',
    weight: '38 g',
    action: {
      edit: 'Edit',
      remove: 'Remove'
    }
  },{
    checked: false,
    productName: 'iPad Pro',
    color: 'Gold',
    category: 'Tablet',
    accesories: 'No',
    available: 'Yes',
    price: '$699',
    weight: '1.3 lb.',
    action: {
      edit: 'Edit',
      remove: 'Remove'
    }
  },{
    checked: false,
    productName: 'Magic Keyboard',
    color: 'Black',
    category: 'Accessories',
    accesories: 'Yes',
    available: 'Yes',
    price: '$99',
    weight: '453 g',
    action: {
      edit: 'Edit',
      remove: 'Remove'
    }
  },{
    checked: false,
    productName: 'Apple TV 4K',
    color: 'Black',
    category: 'TV',
    accesories: 'Yes',
    available: 'No',
    price: '$179',
    weight: '1.78 lb.',
    action: {
      edit: 'Edit',
      remove: 'Remove'
    }
  },{
    checked: false,
    productName: 'AirTag',
    color: 'Silver',
    category: 'Accessories',
    accesories: 'Yes',
    available: 'No',
    price: '$29',
    weight: '53 g',
    action: {
      edit: 'Edit',
      remove: 'Remove'
    }
  }
]
function Component({}: Props) {
  const [checkAll, setCheckAll] = useState(false)
  const [data, setData] = useState(initData)

  function handleCheckAll(e) {
    setCheckAll(e.target.checked)
    setData((prevState) => {
      return prevState.map((prevItem) => {
        return {...prevItem, checked: e.target.checked}
      })
    })
  }



  return <div className={clsx('w-full  overflow-auto')}>
    <table  >
      <thead>
      <tr className={clsx('uppercase bg-cgray')}>
        <td className={clsx('py-2 px-4')}>
          <input type="checkbox" checked={checkAll} onChange={handleCheckAll}/>
        </td>
        <td className={clsx('py-2 px-4')}>

          productName</td>
        <td className={clsx('py-2 px-4')}>

          color</td>
        <td className={clsx('py-2 px-4')}>
          category</td>
        <td>
          accesories</td>
        <td className={clsx('py-2 px-4')}>
          available</td>
        <td>
          price</td>
        <td className={clsx('py-2 px-4')}>
          weight</td>
        <td className={clsx('py-2 px-4')}>
          action</td>
      </tr>
      </thead>
      <tbody>
      {
        data.map((item) => {

          function handleCheck(e) {
            setData((prevState) => {
              return prevState.map((prevItem) => {
                if (prevItem.productName === item.productName) {
                  prevItem.checked = e.target.checked
                }
                return prevItem
              })
            })
          }

          return <tr className={clsx('border-b')} key={item.productName}>
            <td className={clsx('py-2 px-4')}>
              <input type="checkbox" checked={item.checked} onChange={handleCheck}/>
            </td>
            <td className={clsx('py-2 px-4')}>
                {item.productName}</td>
            <td className={clsx('py-2 px-4')}>
                {item.color}</td>
            <td className={clsx('py-2 px-4')}>
                {item.category}</td>
            <td className={clsx('py-2 px-4')}>
                {item.accesories}</td>
            <td className={clsx('py-2 px-4')}>
                {item.available}</td>
            <td className={clsx('py-2 px-4')}>
                {item.price}</td>
            <td className={clsx('py-2 px-4')}>
                {item.weight}</td>
            <td className={clsx('py-2 px-4 space-x-2')}>
                <a href={''} className={clsx('text-blue-700 hover:underline')}>{item.action.edit}</a>
                <a href={''} className={clsx('text-red-700 hover:underline')}>{item.action.remove}</a>
              </td>
          </tr>
        })
      }

      </tbody>
    </table>

  </div>
}

export default Component
