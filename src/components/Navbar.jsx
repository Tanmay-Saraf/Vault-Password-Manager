import React from 'react'

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 bg-neutral-950/30 backdrop-blur-xl text-neutral-200 border-b border-white/10 flex md:flex-row flex-col justify-between items-center py-3 px-6 shadow-lg'>
      <div className="flex flex-col gap-1">
        <div className='logo font-bold text-3xl tracking-wider'>
          <span className='text-red-600'>Vau</span><span >lt</span>
        </div>
        <div className="tagline text-sm text-neutral-400">Input . Store . Secure</div>
      </div>
      <ul>
        <li className='hover:font-bold hover:translate-y-0.5 transition-all duration-150'><a href="/">Home</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
