import React from 'react'
import Image from 'next/image'
import Nav from '../(components)/nav'
import Content from '../(components)/content'

export default function Home() {
  return (
    <div className='text-xs'>
      <Nav />
      <Content />
    </div>
  )
}
