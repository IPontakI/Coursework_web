import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { MainPage } from './components/MainPage/MainPage'
import { FukPage } from './components/FukPage/FukPage'
import { News } from './components/News/News'
import { Gallery } from './components/Gallery/Gallery'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { FukContakts } from './components/FukContakts/FukContakts'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='fukpage' element={<FukPage />} />
          <Route path='news' element={<News />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='contacts' element={<FukContakts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

