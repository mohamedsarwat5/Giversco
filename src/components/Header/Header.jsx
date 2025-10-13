import React from 'react'

export default function Header({ text }) {
    return (
        <div className='flex items-center flex-col space-y-3  '>
            <h1 className='uppercase text-3xl font-light'>{text}</h1>
            <span className='block h-[1px] bg-black/40 w-[300px] lg:w-9/12'></span>
        </div>
    )
}
