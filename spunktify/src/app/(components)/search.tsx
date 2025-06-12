import React from 'react'
import NavSearch from './navSearch'
import PlaylistsCards from './playlists/cards'

export default function Search() {
  return (
    <div className='h-full px-10 border rounded bg-slate-800 text-white'>
      <div className='py-4' >
        <NavSearch />
      </div>
      <div>
        <PlaylistsCards />
      </div>
      <div>
        <h1>Made for user</h1>
      </div>
    </div>
  )
}
