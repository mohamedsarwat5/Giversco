import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom';
import logo from "/logo.png"

export default function Navbar({ toggleLanguage }) {

    const { t, i18n } = useTranslation()



    const Links = [{ lable: 'about', icon: <i className="fa-solid fa-users"></i> },
    { lable: 'products', icon: <i className="fa-solid fa-store"></i> },
    { lable: 'pickles', icon: <i className="fa-solid fa-jar"></i> },
    { lable: 'contact', icon: <i className="fa-solid fa-phone-volume"></i> }]
    const [open, setOpen] = useState(false)

    return (<>

        <div className=' '>
            <nav className='bg-green shadow-md p-5 md:px-[120px] flex items-center justify-between w-full z-20 fixed top-0'>
                <NavLink to={'/'}>

                    <img className='w-9' src={logo} alt="" />
                </NavLink>
                <ul className={`lg:flex hidden items-center space-x-12  `}>
                    {Links.map((link, i) => (
                        <li key={i} className='text-white font-medium space-x-7  '>
                            <NavLink to={`/${link}`} className='uppercase hover:text-green-800 duration-200 transition-all'>

                                {t(`nav.${link.lable}`)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className='flex items-center space-x-2 text-[19px]'>
                    <button onClick={toggleLanguage} className=' text-white cursor-pointer font-semibold hover:text-green-800 duration-200 transition-all '><i className="fa-solid fa-earth-americas block"></i>  </button>

                    <button className='lg:hidden cursor-pointer' onClick={() => setOpen(prev => !prev)}><i className={`fa-bars  fa-solid text-white hover:text-green-800 duration-200 transition-all   `}></i></button>
                </div>
            </nav>

        </div>

        {open && <div onClick={() => setOpen(prev => !prev)} className='md:hidden fixed inset-0 bg-black/45  z-10'></div>}

        <div className={` ${open
            ? 'translate-x-0 opacity-100'
            : i18n.language === 'ar'
                ? '-translate-x-full opacity-0'
                : 'translate-x-full opacity-0'}  ${i18n.language === 'ar' ? 'left-0' : 'right-0'} md:hidden transition-all duration-300 bg-green fixed top-0 bottom-0  w-[300px] z-20`}>

            <button onClick={() => setOpen(false)} className={`absolute top-6 cursor-pointer ${i18n.language === 'ar' ? ' left-5' : 'right-5'} `}> <i className='fa-solid fa-xmark text-white'></i></button>
            <ul className={` flex flex-col  space-y-5 absolute top-16 ${i18n.language === 'ar' ? 'right-5' : 'left-5'}  `}>
                {Links.map((link, i) => (
                    <li key={i} className='text-white font-medium   '>

                        <NavLink onClick={() => setOpen(false)} to={`/${link.lable}`} className='flex items-center gap-x-2 uppercase hover:text-green-800 duration-200 transition-all'>
                            {link.icon}
                            {t(`nav.${link.lable}`)}

                        </NavLink>
                    </li>
                ))}
            </ul>

        </div>
    </>)
}
