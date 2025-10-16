
import { useTranslation } from 'react-i18next'
import img1 from '../../assets/add1.jpg'
import img2 from '../../assets/add2.png'

export default function Banner2() {
    const { t } = useTranslation()
    return (
        <div className="p flex justify-center flex-col lg:flex-row items-center gap-4">
            <div className='lg:w-6/12 rounded-xl overflow-hidden relative'>
                <div className='absolute inset-5 rounded-xl bg-green/15 layerr'>
                    {t(`banner2text1`)}
                </div>
                <img className=' object-top object-cover h-[350px] w-full' src={img2} alt="" />
            </div>
            <div className='lg:w-6/12 rounded-xl overflow-hidden relative'>
                <div className='absolute inset-5 rounded-xl bg-green/15 layerr'>
                    {t(`banner2text2`)}
                </div>
                <img className=' object-top object-cover h-[350px] w-full' src={img1} alt="" />
            </div>
        </div>
    )
}
