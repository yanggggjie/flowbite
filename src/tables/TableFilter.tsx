import { clsx } from 'clsx'
import { useState } from 'react'
import { AiOutlineDown, AiOutlineSearch } from 'react-icons/ai/index.js'
import { IoIosColorPalette } from 'react-icons/io/index.js'
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
  const [color, setColor] = useState('All')
  const filteredByColor = data.filter((item) => {
    return color === 'All' ? true : item.color === color
  })
  const [searchText, setSearchText] = useState('')
  const filteredBySearch = filteredByColor.filter((item) => {
    return item.productName.toLowerCase().includes(searchText.toLowerCase())
  })
  function handleChange(e) {
    setSearchText(e.target.value)
  }

  const [checkAll, setCheckAll] = useState(false)

  function inFilteredBySearch(item) {
    return filteredBySearch.some((value) => {
      return value.productName === item.productName
    })
  }

  function handleCheckAll(e) {
    setCheckAll(e.target.checked)
    setData((prevState) => {
      return prevState.map((value) => {
        if (!inFilteredBySearch(value)) return value
        return {
          ...value,
          checked: e.target.checked,
        }
      })
    })
  }

  return (
    <div className={clsx('p-4 space-y-5')}>
      <div className={clsx('flex flex-row items-center')}>
        <FilterButton color={color} setColor={setColor}></FilterButton>
        <div className={clsx('grow')}></div>
        <div className={clsx('relative')}>
          <input
            className={clsx('pl-8 w-80', 'rounded-xl border-1')}
            type="text"
            placeholder={'search for items'}
            value={searchText}
            onChange={handleChange}
          />
          <span
            className={clsx(
              'absolute top-1/2 -translate-y-1/2 left-2',
              'text-xl text-cbordergray',
              'pointer-events-none',
            )}
          >
            <AiOutlineSearch></AiOutlineSearch>
          </span>
        </div>
      </div>
      <table>
        <thead>
          {
            <tr className={clsx('uppercase bg-cgray')}>
              <td className={clsx('w-10 px-4 py-2')}>
                <input
                  type="checkbox"
                  checked={checkAll}
                  onChange={handleCheckAll}
                />
              </td>
              <td className={clsx('w-1/5  px-4 py-2')}>produce name</td>
              <td className={clsx('w-1/5 px-4 py-2')}>color</td>
              <td className={clsx('w-1/5 px-4 py-2')}>category</td>
              <td className={clsx('w-1/5 px-4 py-2')}>price</td>
              <td className={clsx('w-1/5 px-4 py-2')}>action</td>
            </tr>
          }
        </thead>
        <tbody>
          {filteredBySearch.map((item) => {
            function handleCheck(e) {
              setData((prevState) => {
                return prevState.map((value) => {
                  if (value.productName === item.productName)
                    return {
                      ...value,
                      checked: e.target.checked,
                    }
                  return value
                })
              })
            }

            return (
              <tr key={item.productName} className={clsx('border-b')}>
                <td className={clsx('w-10 px-4 py-2')}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={handleCheck}
                  />
                </td>
                <td className={clsx('w-1/5 px-4 py-2')}>{item.productName}</td>
                <td className={clsx('w-1/5 px-4 py-2')}>{item.color}</td>
                <td className={clsx('w-1/5 px-4 py-2')}>{item.category}</td>
                <td className={clsx('w-1/5 px-4 py-2')}>{item.price}</td>
                <td className={clsx('w-1/5 px-4 py-2')}>
                  <a href="" className={clsx('underline text-blue-500')}>
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

function FilterButton({
  color,
  setColor,
}: {
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
}) {
  const colors = ['All', 'Silver', 'White', 'Black', 'Gold']
  const [showModal, setShowModal] = useState(false)
  function handleClick() {
    setShowModal(!showModal)
  }

  function handleOutsideClick() {
    setShowModal(false)
  }

  return (
    <div className={clsx('relative')}>
      <button
        className={clsx(
          'border rounded-xl px-5 py-1',
          'inline-flex flex-row items-center gap-2',
        )}
        onClick={handleClick}
      >
        <IoIosColorPalette />
        colors
        <AiOutlineDown />
      </button>
      {showModal && (
        <div>
          <div
            onClick={handleOutsideClick}
            className={clsx('fixed inset-0')}
          ></div>
          <div
            className={clsx(
              'absolute mt-2',
              'border w-40 rounded-xl bg-white',
              'p-4 flex flex-col gap-3',
            )}
          >
            {colors.map((value) => {
              function handleChange() {
                setColor(() => {
                  return value
                })
              }
              return (
                <label className={clsx('space-x-2 hover:bg-cgray')} key={value}>
                  <input
                    type="radio"
                    name={'colors'}
                    checked={value === color}
                    onChange={handleChange}
                  />
                  <span>{value}</span>
                </label>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Component
