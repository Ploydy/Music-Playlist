import React from 'react'

export default function NavSearch() {
  return (
    <div className=''>
      <div className='grid grid-cols-10 text-xs sticky text-center gap-1'>
        <div className='border rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>All</div>
        <div className='border rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>Songs</div>
        <div className='border rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>Playlists</div>
        <div className='border rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>Artists</div>
        <div className='border rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>Albums</div>
        <div className='border col-span-2 rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>Podcasts & Shows</div>
        <div className='border rounded-2xl p-2 bg-slate-700 hover:bg-slate-600 transition-all cursor-pointer'>Profiles</div>
      </div>
    </div>
  )
}
