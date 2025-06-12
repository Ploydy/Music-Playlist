import React from 'react'
import Library from './library'
import Search from './search'

export default function Content() {
  return (
    <>
      <div className='grid grid-cols-5 h-screen gap-2 p-2'>
        <div>
          <Library />
        </div>
        <div className='col-span-3'>
          <Search />
        </div>
        <div className='border rounded p-2'>column</div>
      </div>
    </>
  )
}
