import { clsx } from 'clsx'
import { useState } from 'react'
interface Props {}
;`
PRODUCT NAME\tCOLOR\tCATEGORY\tPRICE\tACTION
checkbox\tApple MacBook Pro 17"\tSilver\tLaptop\t$2999\tEdit
checkbox\tMicrosoft Surface Pro\tWhite\tLaptop PC\t$1999\tEdit
checkbox\tMagic Mouse 2\tBlack\tAccessories\t$99\tEdit
checkbox\tApple Watch\tSilver\tAccessories\t$179\tEdit
checkbox\tiPad\tGold\tTablet\t$699\tEdit
checkbox\tApple iMac 27"\tSilver\tPC Desktop\t$3999\tEdit
`

function Component({}: Props) {
  const [data, setData] = useState([
    {
      checked: false,
      productName: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: '$2999',
      action: 'Edit',
    },
    {
      checked: false,
      productName: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      price: '$1999',
      action: 'Edit',
    },
    {
      checked: false,
      productName: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      price: '$99',
      action: 'Edit',
    },
    {
      checked: false,
      productName: 'Apple Watch',
      color: 'Silver',
      category: 'Accessories',
      price: '$179',
      action: 'Edit',
    },
    {
      checked: false,
      productName: 'iPad',
      color: 'Gold',
      category: 'Tablet',
      price: '$699',
      action: 'Edit',
    },
    {
      checked: false,
      productName: 'Apple iMac 27"',
      color: 'Silver',
      category: 'PC Desktop',
      price: '$3999',
      action: 'Edit',
    },
  ])
  return (
    <div>
      <table>
        <thead>
          <tr className={clsx('text-left bg-cgray')}>
            <td className={clsx('w-10 p-3')}>
              <input type="checkbox" />
            </td>
            <td className={clsx('w-1/5 p-3')}>product name</td>
            <td className={clsx('w-1/5 p-3')}>color</td>
            <td className={clsx('w-1/5 p-3')}>category</td>
            <td className={clsx('w-1/5 p-3')}>price</td>
            <td className={clsx('w-1/5 p-3')}>action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            function handleCheck(e) {
              setData((prevState) => {
                return prevState.map((item) => {
                  return { ...item, checked: e.target.checked }
                })
              })
            }

            return (
              <tr
                onClick={handleCheck}
                className={clsx('border-b hover:bg-cgray')}
                key={item.productName}
              >
                <td className={clsx('w-10 p-3')}>
                  <input type="checkbox" />
                </td>
                <td className={clsx('w-1/5 p-3')}>{item.productName}</td>
                <td className={clsx('w-1/5 p-3')}>{item.color}</td>
                <td className={clsx('w-1/5 p-3')}>{item.category}</td>
                <td className={clsx('w-1/5 p-3')}>{item.price}</td>
                <td className={clsx('w-1/5 p-3')}>
                  <a href="" className={clsx('text-blue-500 underline')}>
                    {item.action}
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Component
