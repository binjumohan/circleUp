import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className='flex justify-between items-center px-10 py-4 bg-linear-to-r from-yellow-400 to-yellow-600
   text-white shadow-lg'
   >
    <div className='flex items-center gap-3'>
        <img src="./src/images/logo.png" alt="CircleUp logo" 
        className='w-10 h-10 rounded-lg shadow-md' />
        <h1 className='text-3xl font-bold'>CircleUp</h1>
    </div>
    <ul className='flex gap-8 text-lg'>
        <li><Link to='/' className='hover:text-fuchsia-200 transition-colors cursor-pointer'>Home</Link></li>
        <li><Link  to='events' className='hover:text-fuchsia-200 transition-colors cursor-pointer'>Events</Link></li>
         <li><Link  to='calender' className='hover:text-fuchsia-200 transition-colors cursor-pointer'>Calender</Link></li>
        <li>< Link to='login' className='px-4  rounded-lg bg-black
              font-semibold hover:bg-yellow-400 transition'><button>Login</button></Link></li>
    </ul>
   </nav> 
  )
}

export default Navbar