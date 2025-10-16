import { motion } from "framer-motion"
import { span } from "framer-motion/client"
import { useTranslation } from "react-i18next"

export default function Loading() {

    const { t } = useTranslation()
    const text = t('logo');
    const isArabic = /[\u0600-\u06FF]/.test(text); // detect Arabic letters


    return (

        <div className="fixed inset-0  bg-green flex items-center justify-center text-center text-white text-6xl">
            <div class="loading loading01">
                {isArabic
                    ? <span>{text}</span>
                    : text.split("").map((l, i) => <span key={i}>{l}</span>)
                }
            </div>
        </div >
    )
}
