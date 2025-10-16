import React from 'react'
import { useTranslation } from 'react-i18next'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Header from "../Header/Header.jsx"
import { motion } from 'framer-motion'
export default function Contact() {
    const { t } = useTranslation()
    const contactData = [

        {
            icon: <i className="fa-solid fa-location-dot"></i>,
            text: 'footerText1'
        },
        {
            icon: <i className="fa-solid fa-phone"></i>,
            text: 'footerText2'
        },
        {
            icon: <i className="fa-solid fa-phone"></i>,
            text: 'footerText3'
        },
        {
            icon: <i className="fa-solid fa-envelope"></i>,
            text: 'footerText4'
        },
    ]
    return (
        <motion.div className=' p  '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .8 }}
        >
            <Header text={t(`contact`)} />
            <div className='flex lg:items-center  space-y-6 space-x-5 flex-col lg:flex-row mt-5'>
                <div className="map-container lg:w-1/2 w-full lg:h-[350px] h-[200px] " style={{ position: 'relative', overflow: 'hidden', paddingTop: '0%' }}>
                    <iframe className='rounded-xl' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d874194.7384701336!2d31.24619859122814!3d31.142424477928483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5e1001dd8ca55%3A0x22fdd341836e0290!2sGIVRESCO!5e0!3m2!1sar!2seg!4v1760040230674!5m2!1sar!2seg" style={{ width: '100%', height: '100%', border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

                <div className='px-6 py-9 bg-green rounded-xl lg:h-[250px] h-[200px] lg:w-1/2 w-full  space-y-3 flex flex-col justify-center'>
                    {contactData.map((item, i) => (
                        <div key={i} className='text-white flex items-center space-x-2'>
                            <span>{item.icon}</span>
                            <h2 className=''>{t(`contactData.${item.text}`)}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </motion.div >
    )
}
