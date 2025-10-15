import { motion } from 'framer-motion';
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Services() {

    const servicesData = [
        {
            icon: "/icon1.png",
            title: "title1",
            text: "text1"
        },
        {
            icon: "/icon2.png",
            title: "title2",
            text: "text2"
        },
        {
            icon: "/icon3.png",
            title: "title3",
            text: "text3"
        },
        {
            icon: "/icon4.png",
            title: "title4",
            text: "text4"
        },
        {
            icon: "/icon5.png",
            title: "title5",
            text: "text5"
        },
        {
            icon: "/icon6.png",
            title: "title6",
            text: "text6"
        }
    ];
    const { t } = useTranslation()

    return (
        <div className=' bg-beg p '>
            <motion.h3
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5 }}
                className='text-3xl font-semibold capitalize text-center mb-6 '>our services</motion.h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {servicesData.map((item, i) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .2, delay: i * .1 }}
                        key={i} className='bg-white shadow-md flex  flex-col  px-4 py-6 h-[220px] text-center rounded-3xl space-y-2 '>
                        <img src={item.icon} className='mx-auto ' alt="" />
                        <h3 className='font-semibold text-xl'>{t(`servicesData.${item.title}`)}</h3>
                        <p>{t(`servicesData.${item.text}`)}</p>
                    </motion.div>
                ))}
            </div>

        </div>
    )
}
