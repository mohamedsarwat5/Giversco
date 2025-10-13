import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/home/home'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Prouducts from './components/Prouducts/Prouducts'
import Pickles from './components/Pickles/Pickles'
import Contact from './components/Contact/Contact'

export default function App() {




  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", newLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") || "ar";
    i18n.changeLanguage(savedLang);
    document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
  }, []);

  const router = createBrowserRouter([{
    path: '/', element: <Layout toggleLanguage={toggleLanguage} />, children: [
      {
        index: true, element: <Home />
      },
      {
        path: '/about', element: <About />
      },
      {
        path: '/products', element: <Prouducts />
      },
      {
        path: '/pickles', element: <Pickles />
      },
      {
        path: '/contact', element: <Contact />
      },
    ]
  }])
  return (

    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
