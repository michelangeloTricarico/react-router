import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link, NavLink } from "react-router";
import HomePage from './pages/AppHomePage'
import ContactsPage from './pages/AppContactsPage'
import ProductsPage from './pages/AppProducts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/contacts" Component={ContactsPage} />
          <Route path="/products" Component={ProductsPage} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
