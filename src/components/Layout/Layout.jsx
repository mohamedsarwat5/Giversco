import { useEffect, useState } from "react"
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loading from "../../Loading"
import { AnimatePresence, easeInOut, motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import Whatsapp from "../Whatsapp"

export default function Layout({ toggleLanguage }) {
    const [isLoading, setIsLoading] = useState(false)
    const { i18n } = useTranslation()
    const location = useLocation()

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2500);
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return isLoading ? (<Loading />) : (<>

        <Navbar toggleLanguage={toggleLanguage} />
        <Outlet />
        <Whatsapp />
        <Footer />
    </>)
}
