import React from 'react'

export default function Library() {
  return (
    <div className='h-full w-full p-2 border rounded bg-slate-800 text-white overflow-y-auto'>
      <div className='grid grid-cols-3 rounded p-2 '>
        <div className='col-span-2'>
          Your Library
        </div>
        <div className='col-span-1'>
          <button className='font-bold py-1 px-2 bg-slate-700 hover:bg-slate-600 transition-all rounded-2xl border cursor-pointer'>
            + Create
          </button>
        </div>
      </div>
      <div className='text-xs text-center'>
        <div className='grid grid-cols-4 gap-1 mt-2'>
          <div className='border rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>
            Playlists
          </div>
          <div className='border rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>
            Artists
          </div>
          <div className='border rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>
            Albums
          </div>
        </div>
      </div>
    </div>
  )
}
