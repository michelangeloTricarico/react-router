import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/AppHomePage'
import ContactsPage from './pages/AppContactsPage'
import ProductsPage from './pages/AppProducts'
import NavList from './data/NavLink'
import DefaultLayout from './layout/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout NavList={NavList}/>}>
            <Route path="/" Component={HomePage} />
            <Route path="/contacts" Component={ContactsPage} />
            <Route path="/products" Component={ProductsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
