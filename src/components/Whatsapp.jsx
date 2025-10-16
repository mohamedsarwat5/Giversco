import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export default function Whatsapp() {
    const {i18n} = useTranslation()
    return (
        <div className={`fixed cursor-pointer  z-30 shlg bottom-6 ${i18n.language === "ar" ? 'left-3' :'right-3'} bg-green-500 p-3 rounded-full`}>
            <Link to={'https://wa.me/201226621763'} target='_blank'>
                <i className='fa-brands fa-whatsapp text-3xl text-white'></i>
            </Link>
        </div>
    )
}
