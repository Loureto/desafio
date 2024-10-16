'use client'

import { useEffect } from 'react'
import { useHomeModel } from './home.model'

export const HomeView = (props: ReturnType<typeof useHomeModel>) => {
  const { userData, getUsers } = props

  useEffect(() => {
    getUsers({ page: 1, limit: 3 })
  }, [])

  return (
    <>
      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col text-gray-700">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="border-b border-zinc-800 bg-zinc-800 p-4"
                >
                  <p className="text-sm font-normal leading-none text-white">
                    {header}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {userData?.map((user) => (
              <tr key={user.id} className="text-white">
                <td className="p-4 py-5">
                  <p>{user.name}</p>
                </td>
                <td className="p-4 py-5">
                  <p>{user.email}</p>
                </td>
                <td className="p-4 py-5">
                  <p>{user.address}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex items-center justify-between px-4 py-3">
          <div className="text-sm text-slate-500">
            <b>1-5</b> de {userData?.length}
          </div>
          <div className="flex space-x-1">
            <button className="ease min-h-9 min-w-9 rounded border border-slate-200 bg-white px-3 py-1 text-sm font-normal text-slate-500 transition duration-200 hover:border-slate-400 hover:bg-slate-50">
              Prev
            </button>
            <button className="ease min-h-9 min-w-9 rounded border border-slate-800 bg-slate-800 px-3 py-1 text-sm font-normal text-white transition duration-200 hover:border-slate-600 hover:bg-slate-600">
              1
            </button>
            <button className="ease min-h-9 min-w-9 rounded border border-slate-200 bg-white px-3 py-1 text-sm font-normal text-slate-500 transition duration-200 hover:border-slate-400 hover:bg-slate-50">
              2
            </button>
            <button className="ease min-h-9 min-w-9 rounded border border-slate-200 bg-white px-3 py-1 text-sm font-normal text-slate-500 transition duration-200 hover:border-slate-400 hover:bg-slate-50">
              3
            </button>
            <button className="ease min-h-9 min-w-9 rounded border border-slate-200 bg-white px-3 py-1 text-sm font-normal text-slate-500 transition duration-200 hover:border-slate-400 hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const headers = ['Nome', 'Email', 'Endereço']
