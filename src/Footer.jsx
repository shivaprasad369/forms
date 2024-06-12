import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-black py-3 w-[100vw] overflow-hidden'>
      <div className='flex gap-5 text-white font-bold capitalize justify-center items-center'>
        <h1><Link to='terms'>Terms And Condition</Link></h1>
        <h1><Link to={'privacy'}>Privacy Policy</Link></h1>
        <h1><Link to='refund'>Refund Policy</Link></h1>
      </div>
    </div>
  )
}
