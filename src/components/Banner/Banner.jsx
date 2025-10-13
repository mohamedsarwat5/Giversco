import { t } from 'i18next'
import React from 'react'

export default function Banner() {
    const data = [
        { img: './1.jpg', icon: <i className="fa-solid fa-circle-check"></i>, text: 'bannerM1' },
        { img: './2.jpg', icon: <i className="fa-solid fa-leaf"></i>, text: 'bannerM2' },
        { img: './3.jpg', icon: <i className="fa-solid fa-globe"></i>, text: 'bannerM3' },
    ]
    return (
        <div className='p grid lg:grid-cols-3 grid-cols-1 gap-3'>
            {data.map(({img, text, icon} ,i) => (
                <div key={i} className='rounded-3xl overflow-hidden h-[300px] relative'>
                    <img src={img} className='w-full h-full object-cover object-center' alt="" />
                    <div className='absolute bg-green/35 layer inset-0 flex items-center flex-col justify-center space-y-2 text-white'>
                        <span className='text-3xl'>{icon}</span>
                        <p className='font-semibold text-2xl'>{t(`dataText.${text}`)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
