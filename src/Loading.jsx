import { motion } from "framer-motion"
import { span } from "framer-motion/client"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function Loading() {

const {t,i18n} = useTranslation()
    return (

        <div className="fixed inset-0  bg-green flex items-center justify-center text-center text-white text-6xl">


           <h2 className="animate-bounce"> {t(`logo`)}</h2>
        </div>
    )
}
