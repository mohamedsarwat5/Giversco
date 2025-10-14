import { t } from 'i18next'
import React from 'react'
import Banner from '../components/Banner/Banner'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t, i18n } = useTranslation()
    return (<>
        <div className='hero min-h-screen flex space-y-4 flex-col items-center justify-center'>
            <h1 className={` text-white font-bold md:text-5xl text-3xl px-4  text-center`}>{t('message')}</h1>
            <NavLink className={`bg-green w-46 text-center py-2 text-white rounded-lg certbutton`} to={'/achievements'}>{t('cert')} </NavLink>
        </div>
        <Banner />
    </>)
}
