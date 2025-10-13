import { useEffect, useState } from "react"
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Loading from "../../Loading"

export default function Layout({ toggleLanguage }) {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2500);
    }, [])
    return isLoading ? (<Loading />) : (
        (
            <>

                <Navbar toggleLanguage={toggleLanguage} />
                < Outlet />
                <Footer />
            </>
        )
    )
}
