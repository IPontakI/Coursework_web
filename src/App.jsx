import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Header } from './components/Header/Header'
import { MainPage } from './components/MainPage/MainPage'
import { Footer } from './components/Footer/Footer'
import { FukPage } from './components/FukPage/FukPage'
import { News } from './components/News/News'
import { Gallery } from './components/Gallery/Gallery'

export const App = () => {
  return (
    <div>
      <Header />
      {/* <MainPage></MainPage> */}
      {/* <FukPage /> */}
      {/* <News /> */}
      <Gallery />
      <Footer />
    </div>
  )
}

