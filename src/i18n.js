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
                    footerText1: 'Al-Hamra - Sidi Ghazi - Kafr El-Dawar Road',
                    footerText2: '+(20) 1226621763 <br> +(20) 1283626198',
                    footerText3: 'info@giverscoo.com',
                },
                contactData: {
                    footerText1: 'Al-Hamra - Sidi Ghazi - Kafr El-Dawar Road',
                    footerText2: '+(20) 1226621763',
                    footerText3: '+(20) 1283626198',
                    footerText4: 'info@giverscoo.com',
                },
                contact: 'contact us',
                social: 'SOCIAL',
                link: 'LINKs',
                world: 'in all world',
                pickles: 'pickles',
                servicesData: {
                    text1: 'Sorting products with the latest technology for top quality.',
                    text2: 'Transporting crops directly from farms to sorting and packaging centers.',
                    text3: 'Selecting the best certified farms to guarantee top-quality products at the source.',
                    text4: 'Using advanced packaging methods to keep products fresh and safe.',
                    text5: 'Conducting thorough inspections to ensure products meet standards.',
                    text6: 'Exporting products to international markets with top quality standards.',
                    title1: "Fast Sorting",
                    title2: "Direct Transport",
                    title3: "Certified Farms",
                    title4: "Packaging",
                    title5: "Quality Check",
                    title6: "Global Export"
                },
                proudct: 'products',
                fruit: 'fruits',
                veg: 'vegetables',
                all: 'all',
                bgBannerText1: 'GIVRESCO was founded in 2000 with a vision to provide the ever-growing Middle Eastern and ethnic markets in the United States. Over the years, GIVRESCO has expanded to export to many different European countries with the same uncompromised commitment to quality and sustainability.',
                bgBannerText2: 'GIVRESCO is strategically located between Alexandria Port to the west and the Nile Delta Valley to the east, which has been the agricultural epicenter of Egypt for millennia.',
                about: 'about us',
                AboutGIVRESCO: 'About GIVRESCO',
                about1: 'GIVERSCO was founded in 2000 with a vision to serve the ever-growing Middle Eastern and ethnic markets in the United States. Over the years, the company has expanded its operations to export to several European countries, while maintaining an uncompromised commitment to quality, authenticity, and sustainability.',
                about2: 'Strategically located — Egypt’s agricultural heart for millennia — GIVRESCO enjoys access to the finest produce and logistics advantages.',
                about3: 'Today, GIVRESCO continues to grow as a trusted name in the food industry, offering to partners worldwide.',
                banner2text1: 'Highest quality and efficiency in our factories',
                banner2text2: 'A special system for handling the product to obtain a safe',
                forzen1:'Frozen Vegetables and Fruits',
                forzen2:'GIVRESCO produces all varieties of frozen vegetables and a wide range of fruits and pickled products, sorted and swiftly frozen strictly to retain their nutrients and characteristic taste and to ensure a high quality product.',
                productBtn:'All Products'
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
                    footerText2: '01226621763 <br> 01283626198',
                    footerText3: 'info@giverscoo.com',
                },
                contactData: {
                    footerText1: 'الحمرا - سيدي غازي - طريق كفر الدوار',
                    footerText2: '01226621763',
                    footerText3: '01283626198',
                    footerText4: 'info@giverscoo.com',
                },
                contact: 'إتصل بنا',
                link: 'الروابط',
                social: 'وسائل التواصل الاجتماعي',
                world: 'في جميع أنحاء العالم',
                pickles: "المخللات",
                servicesData: {
                    text1: 'فرز المنتجات باستخدام أحدث التقنيات لضمان أعلى جودة.',
                    text2: 'نقل المحاصيل مباشرةً من المزارع إلى مراكز الفرز والتعبئة.',
                    text3: 'اختيار أفضل المزارع المعتمدة لضمان منتجات عالية الجودة من المصدر.',
                    text4: 'استخدام أساليب تعبئة متقدمة للحفاظ على المنتجات طازجة وآمنة.',
                    text5: 'إجراء فحوصات دقيقة للتأكد من أن المنتجات تفي بالمعايير.',
                    text6: 'تصدير المنتجات إلى الأسواق الدولية وفق أعلى معايير الجودة.',
                    title1: "فرز سريع",
                    title2: "نقل مباشر",
                    title3: "مزارع معتمدة",
                    title4: "التعبئة",
                    title5: "فحص الجودة",
                    title6: "التصدير العالمي"
                },
                proudct: 'المنتجات',
                fruit: 'فواكه',
                veg: 'خضروات',
                all: 'الكل',
                bgBannerText1: 'تأسست جيفرسكو عام 2000 برؤية تهدف إلى تزويد الأسواق الشرق أوسطية والإثنية المتنامية في الولايات المتحدة. على مر السنين، توسعت جيفرسكو لتصدّر إلى العديد من الدول الأوروبية مع الحفاظ على نفس الالتزام الثابت بالجودة والاستدامة.',
                bgBannerText2: 'تقع جيفرسكو في موقعٍ استراتيجي بين ميناء الإسكندرية غربًا ووادي دلتا النيل شرقًا، والذي كان المركز الزراعي لمصر على مدى آلاف السنين.',
                about: 'من نحن',
                AboutGIVRESCO: 'حول جيفريسكو',
                about1: 'تأسست جيفريسكو عام 2000 برؤية تهدف إلى خدمة الأسواق الشرق أوسطية والإثنية المتنامية في الولايات المتحدة. وعلى مر السنين، وسّعت الشركة عملياتها لتصدير منتجاتها إلى عدة دول أوروبية، مع الحفاظ على التزامها الراسخ بالجودة والأصالة والاستدامة.',
                about2: 'بموقعها الاستراتيجي في قلب الزراعة المصرية منذ آلاف السنين، تتمتع جيفريسكو بإمكانية الوصول إلى أجود المحاصيل ومزايا لوجستية متميزة.',
                about3: 'اليوم، تواصل جيفريسكو نموها كاسم موثوق في صناعة الأغذية، مقدّمة خدماتها وشراكاتها لشركاء حول العالم.',
                banner2text1: 'أعلى مستويات الجودة والكفاءة في مصانعنا',
                banner2text2: 'نظام خاص للتعامل مع المنتج لضمان منتج آمن',
                forzen1:'الخضروات والفواكه المجمدة',
                forzen2:'تنتج جيفريسكو جميع أنواع الخضروات المجمدة ومجموعة واسعة من الفواكه والمخللات، يتم فرزها وتجميدها بسرعة وبعناية للحفاظ على قيمتها الغذائية وطعمها المميز، وضمان منتج عالي الجودة.',
                productBtn:'جميع المنتجات'
            },
        }
    },
    lng: "ar", // اللغة الافتراضية
    fallbackLng: "ar",
    interpolation: { escapeValue: false },
});

export default i18n;
