import React from 'react'

const Nav = () => {

    return (
    <div className='text-white md:absolute md:w-full min-w-screen p-7 flex items-center md:justify-between'>
        <div className='md:hidden'>
            <a href='https://www.github.com/nureddinfarzaliyev' target='blank' className='opacity-50 hover:opacity-100 transition'><img src="/images/icon-github.svg" alt="icon" /></a>
        </div>
        <div className='mx-auto md:mx-0'>
            <h1 className='font-font-logo font-semibold text-4xl ml-6 md:ml-0'>verbAI</h1>
            <a href='https://www.github.com/nureddinfarzaliyev' target='blank' className='text-[0.75rem] opacity-70 italic'>created by Nureddin Farzaliyev</a>
        </div>
        <div className='hidden md:flex'>
            <a href='https://www.github.com/nureddinfarzaliyev' target='blank' className='flex items-center justify-between ml-3 px-4 w-[9rem] rounded-lg h-[3rem] bg-black opacity-60 hover:opacity-100 transition text-white font-bold shadow-md text-xl'>
                <img src="/images/icon-github.svg" alt="" />
                <p>GitHub</p>
            </a>
        </div>
    </div>
    )
}

export default Nav