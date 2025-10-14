import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../Header/Header'
import { motion } from 'framer-motion';

export default function Achievements() {

    const { t, i18n } = useTranslation()
    const cerData = [
        { head: "headText1", desc: "headDesc1" },
        { head: "headText2", desc: "headDesc2" },
        { head: "headText3", desc: "headDesc3" },
        { head: "headText4", desc: "headDesc4" },
        { head: "headText5", desc: "headDesc5" },
        { head: "headText6", desc: "headDesc6" }
    ];
    const isoImages = [
        "/iso-22000.png",
        "/iso-45001.png",
        "/iso-fda.png",
        "/iso-u.png",
        "/brcs-food-safety.jpg",
        "/iso-14001.png"
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8 }}
            className='min-h-screen p '>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
            >
                <Header text={t('headerText')} />
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
                className='space-y-5 bg-beg p-5 mt-5'>
                <h3 className='text-green font-bold text-3xl text-center '>{t('certhead')}</h3>
                <p className=' font-medium  lg:w-10/12 mx-auto text-xl'>{t('certParagraph')}</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4  mt-12'>
                    {cerData.map(({ head, desc }, i) => (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .8, delay: i * .2 }}
                            className='flex  space-y-3 flex-col md:h-[250px] bg-white p-6 rounded-2xl shadow-md hover:translate-y-2 duration-300 transition-all'>
                            <h2 className=' text-green font-bold text-xl lg:text-2xl '>{t(`certData.${head}`)}</h2>
                            <p className='font-medium'>{t(`certData.${desc}`)}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <div className='grid items-center lg:grid-cols-3 grid-cols-1 gap-5 py-5 '>
                {isoImages.map((src, i) => (
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .5, delay: i * .1 }}
                        className='mx-auto lg:w-40 ' key={i} src={src} alt="" />
                ))}
            </div>
        </motion.div>
    )
}
