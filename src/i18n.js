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
                },
                cert: 'Achievements',
                headerText: "Certificates",
                certhead: 'Our Success Story',
                certParagraph: 'Since its inception, Givresco has set a clear vision based on leadership in exporting frozen vegetables and fruits, fresh produce, and pickles — while remaining committed to the highest standards of quality and reliability. Today, we are proud to have become a trusted strategic partner for a growing number of global markets, reflecting a record of outstanding achievements.',
                certData: {
                    headText1: "Expanding Global Presence",
                    headText2: "Comprehensive Product Portfolio",
                    headText3: "Internationally Certified Quality",
                    headText4: "Strategic Partnerships",
                    headText5: "Innovative Packaging Solutions",
                    headText6: "Contribution to National Development",
                    headDesc1: "Strengthening our footprint in international markets through a distribution network that spans Europe, Asia, Africa, and the Middle East.",
                    headDesc2: "Frozen vegetables & fruits (IQF technology). Fresh produce carefully selected for global markets. Pickles crafted with authentic taste & export quality.",
                    headDesc3: "Implementing rigorous control systems aligned with global specifications and food safety standards.",
                    headDesc4: "Building long-term relationships with global importers and distributors, founded on trust, transparency, and continuity.",
                    headDesc5: "Employing advanced packaging technologies that preserve freshness and nutritional value while meeting market requirements.",
                    headDesc6: "Supporting the agricultural export sector and strengthening the position of Egyptian products as a reliable and competitive choice worldwide.",
                },
                logo: 'GIVERSCO',
                footerData: {
                    footerText1: 'Al-Hamra - Sidi Ghazi - Kafr El-Dawar Road ',
                    footerText2: '+(20) 1226621763 <br> +(20) 1283626198 ',
                    footerText3: 'info@giverscoo.com ',
                },
                contact: 'contact us',
                social: 'SOCIAL',
                link:'LINKs',
                world:'in all world'
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
                    contact: 'إتصل بنا',
                },
                dataText: {

                    bannerM1: 'أكثر من 25 عامًا من الخبرة',
                    bannerM2: 'أكثر من 85 منتج',
                    bannerM3: 'تصدير إلى أكثر من 25 دولة'
                },
                cert: 'الإنجازات',
                headerText: "الشهادات",
                certhead: 'قصة نجاحنا',
                certParagraph: 'منذ تأسيسها، وضعت جيفرسكو رؤية واضحة تقوم على الريادة في تصدير الخضروات والفواكه المجمدة والمنتجات الطازجة والمخللات، مع الالتزام بأعلى معايير الجودة والموثوقية. واليوم، نفخر بأننا أصبحنا شريكًا استراتيجيًا موثوقًا لعدد متزايد من الأسواق العالمية، مما يعكس سجلًا حافلًا بالإنجازات المتميزة.',
                certData: {
                    headText1: "توسيع الحضور العالمي",
                    headText2: "مجموعة منتجات شاملة",
                    headText3: "جودة معتمدة دوليًا",
                    headText4: "شراكات استراتيجية",
                    headText5: "حلول تغليف مبتكرة",
                    headText6: "المساهمة في التنمية الوطنية",
                    headDesc1: "نعمل على تعزيز وجودنا في الأسواق الدولية من خلال شبكة توزيع تمتد عبر أوروبا وآسيا وأفريقيا والشرق الأوسط.",
                    headDesc2: "خضروات وفواكه مجمدة (بتقنية IQF)، منتجات طازجة مختارة بعناية لتلبية احتياجات الأسواق العالمية، مخللات مصنوعة بطعم أصيل وجودة تصديرية عالية.",
                    headDesc3: "نطبق أنظمة رقابة صارمة تتماشى مع المواصفات العالمية ومعايير سلامة الغذاء.",
                    headDesc4: "نبني علاقات طويلة الأمد مع المستوردين والموزعين حول العالم، قائمة على الثقة والشفافية والاستمرارية.",
                    headDesc5: "نستخدم تقنيات تغليف متقدمة تحافظ على الطزاجة والقيمة الغذائية للمنتجات مع تلبية متطلبات السوق.",
                    headDesc6: "دعم قطاع التصدير الزراعي وتعزيز مكانة المنتجات المصرية كخيار موثوق وتنافسي عالميًا.",
                },
                logo: 'جيفرسكو',
                footerData: {
                    footerText1: 'الحمرا - سيدي غازي - طريق كفر الدوار',

                },
                contact: 'إتصل بنا',
                link: 'الروابط',
                social: 'وسائل التواصل الاجتماعي',
                world:'في جميع أنحاء العالم'

            },
        }
    },
    lng: "ar", // اللغة الافتراضية
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
});

export default i18n;
