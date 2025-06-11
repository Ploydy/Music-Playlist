import React from 'react'
import Library from './library'

export default function Content() {
  return (
    <>
      <div className='grid grid-cols-4 h-screen gap-2 p-2'>
        <div>
          <Library />
        </div>
        <div className='border rounded col-span-2 p-2 w-auto'>column</div>
        <div className='border rounded p-2'>column</div>
      </div>
    </>
  )
}
