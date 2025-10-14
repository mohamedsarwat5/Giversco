import React from 'react'
import { Links } from '../Navbar/Navbar'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import mapImg from '../../assets/maps_white.png'

export default function Footer() {

    const { t } = useTranslation()

    const footerData = [

        {
            icon: <i className="fa-solid fa-location-dot"></i>,
            text: 'footerText1'
        },
        {
            icon: <i className="fa-solid fa-phone"></i>,
            text: 'footerText2'
        },
        {
            icon: <i className="fa-solid fa-envelope"></i>,
            text: 'footerText3'
        },
    ]
    return (
        <div className='bg-green p grid grid-cols-2 gap-6 lg:grid-cols-4  '>
            <div className='flex flex-col space-y-2'>
                <h3 className='text-white lg:text-3xl text-lg'>{t('link')}</h3>
                {Links.map((link, i) => (
                    <NavLink className={`text-white uppercase link`} to={`/${link.lable}`}>{t(`nav.${link.lable}`)}</NavLink>
                ))}
            </div>
            <div className=''>
                <h3 className='text-white lg:text-3xl text-lg uppercase lg:text-center'>{t('contact')}</h3>
                <div className='flex flex-col space-y-1 mt-3'>
                    {footerData.map((item, i) => (
                        <div key={i} className='flex items-center  space-x-2 text-xs text-white'>
                            {item.icon}
                            <p className='' dangerouslySetInnerHTML={{ __html: t(`footerData.${item.text}`) }}></p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h3 className='text-white lg:text-3xl text-lg uppercase text-center'>{t('social')}</h3>
                <div className='flex items-center space-x-2 text-white text-3xl mt-3 justify-center  '>
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=info@giverscoo.com' target='_blank'>
                        <i className="fa-solid fa-envelope cursor-pointer link"></i>
                    </a>
                    <a href='https://www.facebook.com/share/1ZWjBFyJeQ/' target='_blank'>
                        <i className="fa-brands fa-facebook-f cursor-pointer link"></i>
                    </a>
                    <a href='https://www.instagram.com/gfrsco_export?igsh=NzY0cWJ0Mmt0bDA=' target='_blank'>
                        <i className="fa-brands fa-instagram cursor-pointer link "></i>
                    </a>
                </div>

            </div>
            <div>
                <h3 className='text-white lg:text-3xl text-lg uppercase text-center '>{t('world')}</h3>
                <img className='w-40 lg:w-52 mx-auto' src={mapImg} alt="" />
            </div>
        </div>
    )
}
