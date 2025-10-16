import React from 'react'
import { Link } from 'react-router-dom'

export default function Whatsapp() {
    return (
        <div className='fixed cursor-pointer  z-30 shlg bottom-6 right-3 bg-green-500 p-3 rounded-full'>
            <Link to={'https://wa.me/201226621763'} target='_blank'>
                <i className='fa-brands fa-whatsapp text-3xl text-white'></i>
            </Link>
        </div>
    )
}
