import { useTranslation } from 'react-i18next';
import Header from '../Header/Header'
import { act, useState } from 'react';
import { motion } from 'framer-motion';


export default function Prouducts() {

    const data = [
        { id: 13, type: "vegetable", src: "/kas.png" },
        { id: 18, type: "fruit", src: "/str.png" },
        { id: 3, type: "vegetable", src: "/basl.png" },
        { id: 7, type: "vegetable", src: "/crnabet.png" },
        { id: 17, type: "fruit", src: "/manga.png" },
        { id: 10, type: "fruit", src: "/Guava.png" },
        { id: 12, type: "vegetable", src: "/het.png" },
        { id: 5, type: "vegetable", src: "/bsila.png" },
        { id: 1, type: "fruit", src: "/anb.png" },
        { id: 21, type: "vegetable", src: "/thom.png" },
        { id: 6, type: "vegetable", src: "/btats.png" },
        { id: 8, type: "vegetable", src: "/fasolia.png" },
        { id: 19, type: "fruit", src: "/yoga.png" },
        { id: 14, type: "vegetable", src: "/kolkas.png" },
        { id: 16, type: "vegetable", src: "/lemon.png" },
        { id: 11, type: "vegetable", src: "/halbeno.png" },
        { id: 4, type: "vegetable", src: "/brocle.png" },
        { id: 20, type: "vegetable", src: "/molokhia-leaves.png" },
        { id: 15, type: "vegetable", src: "/kors.png" },
        { id: 2, type: "vegetable", src: "/Artichoke.png" },
        { id: 9, type: "vegetable", src: "/felfel.png" },
    ];
    const [activeTap, setActiveTab] = useState('all')
    const filtered = activeTap === 'all' ? data : data.filter((item) => item.type === activeTap)

    const { t } = useTranslation()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: .5 }}
            className='min-h-screen p'>
            <Header text={t(`proudct`)} />
            <div className='mx-auto flex items-center space-x-2 justify-center mt-5'>
                <button onClick={() => setActiveTab("all")} className={`btn  ${activeTap === "all" ? " activeTap " : "notActiveTap"}`}>{t(`all`)}</button>
                <button onClick={() => setActiveTab("vegetable")} className={`btn ${activeTap === "vegetable" ? " activeTap " : "notActiveTap"}`}>{t(`veg`)}</button>
                <button onClick={() => setActiveTab("fruit")} className={`btn ${activeTap === "fruit" ? " activeTap " : "notActiveTap"}`}>{t(`fruit`)}</button>
            </div>

            <div
                className='mt-4 grid grid-cols-2 lg:grid-cols-6 gap-5 bg-beg p-5 '>
                {filtered.map((item, i) => (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5 }}
                        key={i} className='bg-white shadow-md p-3 flex items-center justify-center rounded-2xl'>
                        <img src={item.src} alt="" />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}
