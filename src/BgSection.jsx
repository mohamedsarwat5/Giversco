import { useTranslation } from "react-i18next"


export default function BgSection() {
    const { t } = useTranslation()
    return (
        <div className="py-12 bg-white">
            <div className="banner-bg relative">
                <div className="absolute  inset-6 lg:inset-x-20 lg:inset-y-6 bg-green/35  rounded-xl text-white  p-6">
                    <h2 className="uppercase text-4xl">{t(`about`)}</h2>
                    <div className="space-y-6 mt-4">
                        <p>{t(`bgBannerText1`)}</p>
                        <p>{t(`bgBannerText2`)}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
