import { clsx } from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai/index.js'
interface Props {}

function Component({}: Props) {
  const [data, setData] = useState([
    {
      name: 'Neil Sims',
      email: 'neil.sims@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
      position: 'React Developer',
      status: 'Online',
      action: 'Edit user',
    },
    {
      name: 'Bonnie Green',
      email: 'bonnie@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
      position: 'designer',
      status: 'Online',
      action: 'Edit user',
    },
    {
      name: 'Jese Leos',
      email: 'jese@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
      position: 'Vue JS Developer',
      status: 'Online',
      action: 'Edit user',
    },
    {
      name: 'Thomas Lean',
      email: 'thomes@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
      position: 'UI/UX Engineer',
      status: 'Online',
      action: 'Edit user',
    },
    {
      name: 'Leslie Livingston',
      email: 'leslie@flowbite.com',
      avaterUrl:
        'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
      position: 'SEO Specialist',
      status: 'Offline',
      action: 'Edit user',
    },
  ])

  return (
    <div className={clsx('p-4')}>
      <Header></Header>
      <table>
        <thead>
          <tr className={clsx('uppercase bg-cgray')}>
            <td className={clsx('w-10 p-2')}>
              <input type="checkbox" />
            </td>
            <td className={clsx('w-2/5 p-2')}>name</td>
            <td className={clsx('w-1/5 p-2')}>position</td>
            <td className={clsx('w-1/5 p-2')}>status</td>
            <td className={clsx('w-1/5 p-2')}>action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((value) => {
            return (
              <tr
                className={clsx('border-b', 'hover:bg-cgray')}
                key={value.name}
              >
                <td className={clsx('w-10 p-2')}>
                  <input type="checkbox" />
                </td>
                <td className={clsx('w-2/5 p-2')}>
                  <div className={clsx('flex flex-row items-center gap-2')}>
                    <div>
                      {
                        <img
                          className={clsx('w-10 h-10 rounded-full')}
                          src={value.avaterUrl}
                          alt="avater"
                        />
                      }
                    </div>
                    <div>
                      <div>{value.name}</div>
                      <div className={clsx('text-sm text-gray-400')}>
                        {value.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className={clsx('w-1/5 p-2')}>{value.position}</td>
                <td className={clsx('w-1/5 p-2')}>
                  <div className={clsx('flex flex-row items-center gap-1')}>
                    <div
                      className={clsx(
                        'w-3 h-3 rounded-full',
                        value.status === 'Online' && 'bg-green-500',
                        value.status === 'Offline' && 'bg-red-500',
                      )}
                    ></div>
                    {value.status}
                  </div>
                </td>
                <td className={clsx('w-1/5 p-2')}>
                  <a href="" className={clsx('text-blue-500 hover:underline')}>
                    {value.action}
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

function ActionButton() {
  const actions = ['Reward', 'Promote', 'Activate account', 'Delete User']
  const [open, setOpen] = useState(false)
  function handleActionClick() {
    setOpen(!open)
  }
  const ref = useRef(null)
  useEffect(() => {
    function handleOutsideClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    window.addEventListener('click', handleOutsideClick)
    return () => {
      window.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div ref={ref} className={clsx('relative', 'p-4')}>
      <button
        className={clsx('py-1 px-4 rounded border hover:ring-gray-300 ring-2')}
        onClick={handleActionClick}
      >
        Action
      </button>
      {open && (
        <div
          className={clsx(
            'absolute mt-2 bg-white w-48 rounded-xl overflow-hidden',
          )}
        >
          {actions.map((value) => {
            return (
              <div
                className={clsx(
                  'px-2 py-1',
                  'hover:bg-gray-400',
                  value === 'Delete User' && 'border-t',
                )}
              >
                {value}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function SearchBar() {
  return (
    <div className={clsx('relative')}>
      <input
        className={clsx('rounded-xl border pl-6')}
        placeholder={'Search for users'}
        type="text"
      />
      <span
        className={clsx(
          'absolute top-1/2 -translate-y-1/2 left-2 text-gray-400 pointer-events-none',
        )}
      >
        <AiOutlineSearch></AiOutlineSearch>
      </span>
    </div>
  )
}

function Header() {
  return (
    <div className={clsx('flex flex-row items-center justify-between')}>
      <ActionButton></ActionButton>
      <SearchBar></SearchBar>
    </div>
  )
}

export default Component
