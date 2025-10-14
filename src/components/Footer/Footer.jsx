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
        <div className='bg-green p flex flex-col   relative '>
           
            <div className='flex lg:justify-around justify-between'>


                <div className=''>
                    <h3 className='text-white lg:text-3xl text-lg uppercase   mb-2'>{t('world')}</h3>
                    <img className='w-40 lg:w-52 ' src={mapImg} alt="" />
                </div>

                <div>
                    <h3 className='text-white lg:text-3xl text-lg uppercase text-center'>{t('social')}</h3>
                    <div className='flex items-center space-x-2 text-white text-3xl mt-2 justify-center  '>
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

                <div className='mb-5 hidden lg:block'>
                    <h3 className='text-white lg:text-3xl text-lg uppercase  mt-3 '>{t('contact')}</h3>
                    <div className='flex flex-col space-y-1 mt-3'>
                        {footerData.map((item, i) => (
                            <div key={i} className='flex items-center  space-x-2 text-sm text-white'>
                                {item.icon}
                                <p className='' dangerouslySetInnerHTML={{ __html: t(`footerData.${item.text}`) }}></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='mb-5 block lg:hidden'>
                <h3 className='text-white lg:text-3xl text-lg uppercase  mt-3 '>{t('contact')}</h3>
                <div className='flex flex-col space-y-1 mt-3'>
                    {footerData.map((item, i) => (
                        <div key={i} className='flex items-center  space-x-2 text-sm text-white'>
                            {item.icon}
                            <p className='' dangerouslySetInnerHTML={{ __html: t(`footerData.${item.text}`) }}></p>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='opacity-35 w-9/12 mx-auto mb-2 text-white' />
            <p className=' text-white text-sm text-center '>© Copyright 2025 GIVRESCO. All Rights Reserved.</p>
        </div>
    )
}
