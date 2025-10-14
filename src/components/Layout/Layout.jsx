import { useEffect, useState } from "react"
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loading from "../../Loading"
import { AnimatePresence, easeInOut, motion } from "framer-motion"
import { useTranslation } from "react-i18next"

export default function Layout({ toggleLanguage }) {
    const [isLoading, setIsLoading] = useState(false)
    const { i18n } = useTranslation()

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2500);
    }, [])


    return isLoading ? (<Loading />) : (<>

        <Navbar toggleLanguage={toggleLanguage} />


        <Outlet />


        <Footer />
    </>)
}
