import { clsx } from 'clsx'
import { useState } from 'react'
import * as React from 'react'
import { range } from 'lodash-es'
interface Props {}

function Component({}: Props) {
  const [data, setData] = useState([
    {
      productName: 'Apple MacBook Pro 17"',
      color: 'Silver',
      category: 'Laptop',
      price: '$2999',
      action: 'Edit',
    },
    {
      productName: 'Microsoft Surface Pro',
      color: 'White',
      category: 'Laptop PC',
      price: '$1999',
      action: 'Edit',
    },
    {
      productName: 'Magic Mouse 2',
      color: 'Black',
      category: 'Accessories',
      price: '$99',
      action: 'Edit',
    },
    {
      productName: 'Apple Watch',
      color: 'Black',
      category: 'Watches',
      price: '$199',
      action: 'Edit',
    },
    {
      productName: 'Apple iMac',
      color: 'Silver',
      category: 'PC',
      price: '$2999',
      action: 'Edit',
    },
    {
      productName: 'Apple AirPods',
      color: 'White',
      category: 'Accessories',
      price: '$399',
      action: 'Edit',
    },
    {
      productName: 'iPad Pro',
      color: 'Gold',
      category: 'Tablet',
      price: '$699',
      action: 'Edit',
    },
    {
      productName: 'Magic Keyboard',
      color: 'Black',
      category: 'Accessories',
      price: '$99',
      action: 'Edit',
    },
    {
      productName: 'Smart Folio iPad Air',
      color: 'Blue',
      category: 'Accessories',
      price: '$79',
      action: 'Edit',
    },
    {
      productName: 'AirTag',
      color: 'Silver',
      category: 'Accessories',
      price: '$29',
      action: 'Edit',
    },
  ])
  const [pageIndex, setPageIndex] = useState(0)
  const currentPageData = data.slice(pageIndex * 2, pageIndex * 2 + 2)
  return (
    <div>
      <table>
        <thead>
          <tr className={clsx('bg-cgray uppercase text-left')}>
            <th className={clsx('w-10 py-2 px-4')}>
              <input type="checkbox" />
            </th>
            <th className={clsx('w-1/5 py-2 px-4')}>product name</th>
            <th className={clsx('w-1/5 py-2 px-4')}>color</th>
            <th className={clsx('w-1/5 py-2 px-4')}>category</th>
            <th className={clsx('w-1/5 py-2 px-4')}>price</th>
            <th className={clsx('w-1/5 py-2 px-4')}>action</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((item) => {
            return (
              <tr
                className={clsx('border-b hover:bg-cgray')}
                key={item.productName}
              >
                <td className={clsx('w-10 py-2 px-4')}>
                  <input type="checkbox" />
                </td>
                <td className={clsx('w-1/5 py-2 px-4')}>{item.productName}</td>
                <td className={clsx('w-1/5 py-2 px-4')}>{item.color}</td>
                <td className={clsx('w-1/5 py-2 px-4')}>{item.category}</td>
                <td className={clsx('w-1/5 py-2 px-4')}>{item.price}</td>
                <td className={clsx('w-1/5 py-2 px-4')}>
                  <a href="" className={clsx('text-blue-500 hover:underline')}>
                    {item.action}
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <PageControl
        pageIndex={pageIndex}
        maxPageIndex={data.length / 2}
        setPageIndex={setPageIndex}
      ></PageControl>
    </div>
  )
}

function PageControl({
  pageIndex,
  setPageIndex,
  maxPageIndex,
}: {
  pageIndex: number
  setPageIndex: React.Dispatch<React.SetStateAction<number>>
  maxPageIndex: number
}) {
  const pageNumbers = range(1, maxPageIndex + 1)
  function handlePreviousClick() {
    setPageIndex((prevState) => {
      return prevState - 1
    })
  }
  function handleNextClick() {
    setPageIndex((prevState) => {
      return prevState + 1
    })
  }

  return (
    <div
      className={clsx(
        'py-1 px-4',
        'flex flex-row items-center justify-between',
      )}
    >
      <div>
        Showing 1-{(pageIndex + 1) * 2} of {maxPageIndex * 2}
      </div>
      <div className={clsx('flex flex-row items-center')}>
        <button
          disabled={pageIndex === 0}
          className={clsx(
            'text-blue-500 disabled:text-black  border rounded-l-lg px-2 py-1',
          )}
          onClick={handlePreviousClick}
        >
          Previous
        </button>
        {pageNumbers.map((value) => {
          function handlePageNumberClick() {
            setPageIndex(() => {
              return value - 1
            })
          }

          return (
            <button
              onClick={handlePageNumberClick}
              className={clsx(
                'border-y border-r px-3 py-1',
                pageIndex === value - 1 && 'text-blue-500',
              )}
              key={value}
            >
              {value}
            </button>
          )
        })}
        <button
          disabled={pageIndex === maxPageIndex - 1}
          className={clsx(
            'text-blue-500 disabled:text-black  border-y border-r px-2 py-1 rounded-r-lg',
          )}
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Component
