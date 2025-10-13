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
                    products:'Products',
                    pickles:'Pickles',
                    contact: 'Contact',

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
                      products:'المنتجات',
                    pickles:'المخللات',
                    contact: 'اتصل بنا',
                }
            },
        }
    },
    lng: "ar", // اللغة الافتراضية
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
});

export default i18n;
