import { motion } from "framer-motion"
import { span } from "framer-motion/client"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function Loading() {

    const { t, i18n } = useTranslation()
    return (

        <div className="fixed inset-0  bg-green flex items-center justify-center text-center text-white text-6xl">
            <div class="loading loading01">


                {t(`logo`).split("").map((l, i) => (
                    <span key={i}>{l}</span>
                ))}
                {/* <span>L</span>
                <span>O</span>
                <span>A</span>
                <span>D</span>
                <span>I</span>
                <span>N</span>
                <span>G</span> */}
            </div>

            {/* <h2 className="animate-bounce"> </h2> */}
            {/* {t(`logo`).split("").map((letter, i, arr) => (
                <motion.h2
                    className="block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: 'loop', ease: "easeInOut", }}

                    key={i}> {letter}</motion.h2>
            ))
            } */}

        </div >
    )
}
