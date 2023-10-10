import { clsx } from 'clsx'
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai/index.js'
interface Props {}

function Component({}: Props) {
  const [data, setData] = useState([
    {
      checked: false,
      name: 'Neil Sims',
      email: 'neil.sims@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
      position: 'React Developer',
      status: 'Online',
      action: 'Edit user',
    },
    {
      checked: false,
      name: 'Bonnie Green',
      email: 'bonnie@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
      position: 'designer',
      status: 'Online',
      action: 'Edit user',
    },
    {
      checked: false,
      name: 'Jese Leos',
      email: 'jese@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      position: 'Vue JS Developer',
      status: 'Online',
      action: 'Edit user',
    },
    {
      checked: false,
      name: 'Thomas Lean',
      email: 'thomes@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      position: 'UI/UX Engineer',
      status: 'Online',
      action: 'Edit user',
    },
    {
      checked: false,
      name: 'Leslie Livingston',
      email: 'leslie@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
      position: 'SEO Specialist',
      status: 'Offline',
      action: 'Edit user',
    },
  ])

  const [searchText, setSearchText] = useState('')
  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchText.toLowerCase())
  })
  const [checkAll, setCheckAll] = useState(false)
  function handleCheckALl(e) {
    function inFilteredData(item) {
      return filteredData.some((value) => {
        return value.name === item.name
      })
    }

    setCheckAll(e.target.checked)
    setData((prevState) => {
      return prevState.map((value) => {
        if (!inFilteredData(value)) {
          return value
        }
        return { ...value, checked: e.target.checked }
      })
    })
  }
  return (
    <div className={clsx('p-4')}>
      <Header setSearchText={setSearchText}></Header>
      <table className={clsx('w-full')}>
        <thead>
          <tr className={clsx('uppercase text-left bg-cgray border-b')}>
            <th className={clsx('p-2 w-14')}>
              <input
                type="checkbox"
                checked={checkAll}
                onChange={handleCheckALl}
              />
            </th>
            <th className={clsx('p-2 w-2/5')}>name</th>
            <th className={clsx('p-2 w-1/5')}>position</th>
            <th className={clsx('p-2 w-1/5')}>status</th>
            <th className={clsx('p-2 w-1/5')}>action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => {
            function handleChange(e) {
              setData((prevState) => {
                return prevState.map((value) => {
                  if (item.name === value.name) {
                    return { ...value, checked: e.target.checked }
                  }
                  return value
                })
              })
            }
            return (
              <tr key={item.name} className={clsx('border-b')}>
                <td className={clsx('p-2 w-14')}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={handleChange}
                  />
                </td>
                <td className={clsx('p-2 w-2/5')}>
                  <div className={clsx('flex flex-row items-center gap-2')}>
                    <img
                      className={clsx('w-10 rounded-full')}
                      src={item.avaterUrl}
                      alt=""
                    />
                    <div>
                      <div className={clsx('')}>{item.name}</div>
                      <div className={clsx('text-xs text-gray-400')}>
                        {item.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className={clsx('p-2 w-1/5')}>{item.position}</td>
                <td className={clsx('p-2 w-1/5')}>
                  <div className={clsx('flex flex-row items-center gap-1')}>
                    <div
                      className={clsx(
                        'w-3 h-3 rounded-full',
                        item.status === 'Online'
                          ? 'bg-green-500'
                          : 'bg-red-500',
                      )}
                    ></div>

                    {item.status}
                  </div>
                </td>
                <td
                  className={clsx('p-2 w-1/5', 'text-blue-500 hover:underline')}
                >
                  {item.action}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function Action() {
  const ref = useRef(null)
  const [show, setShow] = useState(false)
  const actionList = ['Reward', 'Promote', 'Activate account', 'Delete User']

  function handleClick() {
    setShow(!show)
  }

  useEffect(() => {
    function handleClickOutSide(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setShow(false)
      }
    }
    document.addEventListener('click', handleClickOutSide)
    return () => {
      document.removeEventListener('click', handleClickOutSide)
    }
  }, [])

  return (
    <div ref={ref} className={clsx('relative')}>
      <button
        onClick={handleClick}
        className={clsx('border py-1 px-2 rounded-xl')}
      >
        Action
      </button>
      {show && (
        <div
          className={clsx('absolute bg-white w-36 rounded-xl border mt-1 pl-2')}
        >
          {actionList.map((item) => {
            return (
              <div
                className={clsx(
                  item === 'Delete User' && 'border-t',
                  'hover:bg-cgray',
                )}
                key={item}
              >
                {item}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function SearchText({
  setSearchText,
}: {
  setSearchText: Dispatch<SetStateAction<string>>
}) {
  function handleChange(e) {
    setSearchText(e.target.value)
  }
  return (
    <div className={clsx('relative')}>
      <input
        onChange={handleChange}
        type="text"
        className={clsx('pl-8 rounded-lg border-cbordergray')}
        placeholder={'Search for users'}
      />
      <span
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 left-2 pointer-events-none text-cbordergray',
        )}
      >
        <AiOutlineSearch></AiOutlineSearch>
      </span>
    </div>
  )
}

function Header({
  setSearchText,
}: {
  setSearchText: Dispatch<SetStateAction<string>>
}) {
  return (
    <div className={clsx('flex flex-row items-center justify-between mb-2')}>
      <Action></Action>
      <SearchText setSearchText={setSearchText}></SearchText>
    </div>
  )
}

export default Component
