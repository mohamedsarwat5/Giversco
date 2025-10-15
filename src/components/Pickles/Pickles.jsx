import React from 'react'
import Header from '../Header/Header'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'


export default function Pickles() {
    const { t } = useTranslation()
    const imgs = [
        '/6.png',
        '/1.png',
        '/3.png',
        '/9.png',
        '/2.png',
        '/5.png',
        '/8.png',
        '/7.png',
        '/10.png',
        '/4.png',

    ]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8 }} className='min-h-screen p'>
            <Header text={t('pickles')} />
            <div className='p-6 bg-beg mt-5 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-2    gap-6'>
                {imgs.map((src, i) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .5, delay:i*.2 }}
                        key={i} className=' bg-white shadow-md p-6 flex items-center justify-center rounded-3xl'>
                        <img className='w-40' src={src} alt="" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
