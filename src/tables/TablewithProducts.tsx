import { clsx } from 'clsx'
import { Dispatch, SetStateAction, useState } from 'react'
interface Props {}

function Component({}: Props) {
  const [data, setData] = useState([
    {
      img: 'https://flowbite.com/docs/images/products/apple-watch.png',
      productName: 'Apple Watch',
      price: '$599',
      quantity: 1,
      action: 'Remove',
    },
    {
      img: 'https://flowbite.com/docs/images/products/imac.png',
      productName: 'Imac 27"',
      price: '$2499',
      quantity: 1,
      action: 'Remove',
    },
    {
      img: 'https://flowbite.com/docs/images/products/iphone-12.png',
      productName: 'iphone 12',
      price: '$999',
      quantity: 1,
      action: 'Remove',
    },
  ])

  return (
    <div>
      <table className={clsx('w-full')}>
        <thead>
          <tr className={clsx('border-b text-left uppercase bg-cgray')}>
            <th className={clsx('w-1/5 p-2')}></th>
            <th className={clsx('w-1/5 p-2')}>product</th>
            <th className={clsx('w-1/5 p-2')}>qty</th>
            <th className={clsx('w-1/5 p-2')}>price</th>
            <th className={clsx('w-1/5 p-2')}>action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            function setCount(newCount: number) {
              setData((prevState) => {
                return prevState.map((prevItem) => {
                  if (prevItem.productName === item.productName) {
                    return { ...prevItem, quantity: newCount }
                  }
                  return prevItem
                })
              })
            }

            return (
              <tr
                className={clsx('border-b hover:bg-cgray')}
                key={item.productName}
              >
                <td className={clsx('p-2 w-1/5')}>
                  <img className={clsx('w-20')} src={item.img} alt="" />
                </td>
                <td className={clsx('p-2 w-1/5')}>{item.productName}</td>
                <td className={clsx('p-2 w-1/5')}>
                  <Quantity
                    count={item.quantity}
                    setCount={setCount}
                  ></Quantity>
                </td>
                <td className={clsx('p-2 w-1/5')}>{item.price}</td>
                <td className={clsx('p-2 w-1/5')}>
                  <a href="" className={clsx('text-red-500 hover:underline')}>
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

function Quantity({
  count,
  setCount,
}: {
  count: number
  setCount: Dispatch<SetStateAction<number>>
}) {
  function handleChange(e) {
    setCount(Number(e.target.value))
  }

  function add() {
    setCount(Number(count + 1))
  }
  function sub() {
    setCount(Number(count + 1))
  }

  return (
    <div className={clsx('flex flex-row items-center gap-1')}>
      <button
        className={clsx(
          'border rounded-full w-5 h-5',
          'flex flex-row items-center justify-center',
        )}
        onClick={sub}
      >
        -
      </button>
      <input
        className={clsx(
          'w-10 h-6 text-xs rounded-lg border border-cbordergray text-center',
        )}
        type="value"
        value={count}
        onChange={handleChange}
      />
      <button
        className={clsx(
          'border rounded-full w-5 h-5',
          'flex flex-row items-center justify-center',
        )}
        onClick={add}
      >
        +
      </button>
    </div>
  )
}

export default Component
