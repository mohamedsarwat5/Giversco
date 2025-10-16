import React from 'react'
import img from "../../assets/add2.png"
import { useTranslation } from 'react-i18next'
export default function About() {
    const { t } = useTranslation()
    return (
        <div className='p lg:!pt-18 flex-col lg:flex-row space-y-5 lg:space-y-0 flex items-center justify-between  '>
            <div className='space-y-4 lg:w-6/12'>
                <h2 className='text-[#198754] font-semibold text-3xl'>{t('AboutGIVRESCO')}</h2>
                <div className='text-[20px] space-y-3'>
                    <p>{t(`about1`)}</p>
                    <p>{t(`about2`)}</p>
                    <p>{t(`about3`)}</p>
                </div>
            </div>
            <div className='lg:w-5/12 overflow-hidden rounded-xl shrink-0'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}
