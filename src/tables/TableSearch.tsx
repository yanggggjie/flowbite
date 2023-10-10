import { clsx } from 'clsx'
import { useState } from 'react'
interface Props {}

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
  const [searchText, setSearchText] = useState('')
  const filteredData = data.filter((item) => {
    return item.productName.toLowerCase().includes(searchText.toLowerCase())
  })
  const [checkAll, setCheckAll] = useState(false)
  function handleSearch(e) {
    setSearchText(e.target.value)
  }
  function handleCheckAll(e) {
    setCheckAll(e.target.checked)

    function isInFilteredData(item) {
      return filteredData.some((value) => {
        return value.productName === item.productName
      })
    }

    setData((prevState) => {
      return prevState.map((item) => {
        if (isInFilteredData(item))
          return { ...item, checked: e.target.checked }
        return item
      })
    })
  }

  return (
    <div className={clsx('p-4')}>
      <div className={clsx('relative py-2')}>
        <input
          className={clsx('w-72 h-9 pl-8 border-cbordergray  rounded-md')}
          type="text"
          value={searchText}
          onChange={handleSearch}
        />
        <svg
          className="absolute top-1/2 -translate-y-1/2 left-2  w-4 h-4 text-cbordergray  pointer-events-none"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <table>
        <thead>
          <tr className={clsx('uppercase')}>
            <td className={clsx('py-2 pr-3')}>
              <input
                type="checkbox"
                checked={checkAll}
                onChange={handleCheckAll}
              />
            </td>
            <td className={clsx('py-2 pr-3')}>product name</td>
            <td className={clsx('py-2 pr-3')}>color</td>
            <td className={clsx('py-2 pr-3')}>category</td>
            <td className={clsx('py-2 pr-3')}>price</td>
            <td className={clsx('py-2 pr-3')}>action</td>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            function handleCheck(e) {
              setData((prevState) => {
                return prevState.map((value) => {
                  if (value.productName === item.productName) {
                    return { ...value, checked: e.target.checked }
                  }
                  return value
                })
              })
            }
            return (
              <tr key={item.productName}>
                <td className={clsx('py-2 pr-3')}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={handleCheck}
                  />
                </td>
                <td className={clsx('py-2 pr-3')}>{item.productName}</td>
                <td className={clsx('py-2 pr-3')}>{item.color}</td>
                <td className={clsx('py-2 pr-3')}>{item.category}</td>
                <td className={clsx('py-2 pr-3')}>{item.price}</td>
                <td className={clsx('py-2 pr-3')}>
                  <a className={clsx('text-blue-600 underline')} href="">
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
