import { t } from 'i18next'
import React from 'react'
import Banner from '../components/Banner/Banner'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { easeIn, easeInOut, motion } from 'framer-motion'
import Services from '../components/Services/Services'


export default function Home() {
    const { t, i18n } = useTranslation()
    return (<>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8 }}
            className='hero min-h-screen flex space-y-4 flex-col items-center justify-center '>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ease: easeInOut, duration: .9 }}
                className={` text-white font-bold md:text-5xl text-3xl px-4  text-center`}>{t('message')}</motion.h1>
            <NavLink
                className={`bg-green w-46 text-center py-2 text-white rounded-lg certbutton`} to={'/achievements'}>{t('cert')} </NavLink>
        </motion.div>
        <Banner />
        <Services />
    </>)
}
