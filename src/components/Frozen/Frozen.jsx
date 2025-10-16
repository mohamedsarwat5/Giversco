import { useTranslation } from "react-i18next"

import lemon from '../../assets/lemon.png'
import str from '../../assets/str.png'
import Artichoke from '../../assets/Artichoke.png'
import manga from '../../assets/manga.png'
import { Link, NavLink } from "react-router-dom"

export default function Frozen() {
    const { t, i18n } = useTranslation()
    return (
        <div className="p bg-beg text-center">
            <h2 className="text-2xl lg:text-4xl font-semibold mb-5">{t(`forzen1`)}</h2>
            <p className="text-sm">{t(`forzen2`)}</p>
            <div className="gap-3 grid grid-cols-2 lg:grid-cols-4 mt-5">
                <div className="bg-white py-4 shadow-md flex items-center justify-center rounded-2xl col-span-2 lg:col-span-1">
                    <img className="w-48 " src={lemon} alt="" />
                </div>
                <div className="bg-white p-6 shadow-md flex items-center justify-center rounded-2xl">
                    <img className="w-32 " src={manga} alt="" />
                </div>
                <div className="bg-white shadow-md flex items-center justify-center rounded-2xl">
                    <img className="w-48 px-4" src={Artichoke} alt="" />
                </div>
                <div className="bg-white py-4 shadow-md flex items-center justify-center rounded-2xl col-span-2 lg:col-span-1">
                    <img className="w-48 " src={str} alt="" />
                </div>
            </div>
            <Link  to={'/products'} className="rounded-md bg-green text-white px-5 py-2 mt-5 flex items-center space-x-1.5 w-fit mx-auto hover:bg-green-700 transition-all duration-300 cursor-pointer">
                <span>{t(`productBtn`)}</span>
                <i className={`fa-solid ${i18n.language === 'ar' ? 'fa-arrow-left':'fa-arrow-right'}`} />

            </Link>
        </div>
    )
}
