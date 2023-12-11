import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='fixed flex w-full items-center justify-evenly bg-slate-700 h-16'>
      <div className='text-2xl w-1/2 text-blue-100'>KnowURweather</div>
      <div>
        <ul className='flex gap-6'>
            <NavLink to='/' className={({isActive}) => `${isActive? 'font-bold': 'font-thin'} text-white text-lg hover:text-blue-800`} >Home</NavLink>
            <NavLink to='/about' className={({isActive}) => `${isActive? 'font-bold': 'font-thin'} text-white text-lg hover:text-blue-800`} >About</NavLink>
            <NavLink to='/weather' className={({isActive}) => `${isActive? 'font-bold': 'font-thin'} text-white text-lg hover:text-blue-800`} >Weather</NavLink>
        </ul>
      </div>
    </div>
  )
}
