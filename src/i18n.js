import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                title: "Welcome to My Website",
                paragraph: "This is a simple paragraph for testing translations.",
                note: "Switch language using the button below 👇",
                message: 'Welcome To GIVERSCO Company',
                nav: {
                    about: 'About us',
                    products: 'Products',
                    pickles: 'Pickles',
                    contact: 'Contact',

                },
                dataText: {

                    bannerM1: '25+ Years Experience',
                    bannerM2: '85+ Product',
                    bannerM3: '25+ Contraies Export'
                }
            },
        },
        ar: {
            translation: {
                title: "مرحبًا بك في موقعي",
                paragraph: "هذه فقرة بسيطة لاختبار الترجمة.",
                note: "بدّل اللغة باستخدام الزر بالأسفل 👇",
                message: 'مرحبًا بكم في شركة جيفرسكو',
                nav: {
                    about: 'من نحن',
                    products: 'المنتجات',
                    pickles: 'المخللات',
                    contact: 'اتصل بنا',
                },
                dataText: {

                    bannerM1: 'أكثر من 25 عامًا من الخبرة',
                    bannerM2: 'أكثر من 85 منتج',
                    bannerM3: 'تصدير إلى أكثر من 25 دولة'
                }
            },
        }
    },
    lng: "ar", // اللغة الافتراضية
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
});

export default i18n;
