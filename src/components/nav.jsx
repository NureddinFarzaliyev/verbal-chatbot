import React from 'react'

const Nav = () => {
  return (
    <div className='text-white min-w-screen z-[9999] p-7 flex items-center md:justify-between'>
        <div className='md:hidden'>
            <button><img src="/images/icon-menu.svg" alt="hamburger" /></button>
        </div>
        <div className='mx-auto md:mx-0'>
            <h1 className='font-font-logo font-semibold text-4xl ml-6 md:ml-0'>verbAI</h1>
            <a href='https://www.github.com/nureddinfarzaliyev' target='blank' className='text-[0.75rem] opacity-70 italic'>created by Nureddin Farzaliyev</a>
        </div>
        <div className='hidden md:flex'>
            <button className='flex items-center justify-between px-4 w-[8rem] rounded-lg h-[3rem] bg-[#a9a9a9] opacity-60 hover:opacity-100 transition text-black font-bold shadow-md text-xl'>
                <img src="/images/icon-question-circle.svg" alt="" />
                <p>Help</p>
            </button>
            <button className='flex items-center justify-between ml-3 px-4 w-[9rem] rounded-lg h-[3rem] bg-black opacity-60 hover:opacity-100 transition text-white font-bold shadow-md text-xl'>
                <img src="/images/icon-github.svg" alt="" />
                <p>GitHub</p>
            </button>
        </div>
    </div>
  )
}

export default Nav