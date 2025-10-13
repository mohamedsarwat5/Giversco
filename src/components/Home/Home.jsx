import { t } from 'i18next'
import React from 'react'

export default function Home() {
    return (
        <div className='hero min-h-screen flex items-center justify-center'>
           <h1 className='text-white font-bold md:text-5xl text-4xl px-4 text-center'>{t('message')}</h1>
        </div>
    )
}
