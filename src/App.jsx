import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, unstable_setDevServerHooks } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactsPage from './pages/ContactsPage'
import ProductsPage from './pages/Products'
import SingleProduct from './pages/SingleProduct'
import NavList from './data/NavLink'
import DefaultLayout from './layout/Layout'
import Card from './components/Cards'

function App() {

  useEffect(takeProducts,[])
  const [products,setProducts] = useState([])
  const [minId,setMinId]= useState(null)
  const [maxId,setMaxId]= useState(null)

  function takeProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log(data);
        const min_Id=data[0].id
        setMinId(Number(min_Id))
        const max_Id=data[data.length - 1].id
        setMaxId(Number(max_Id))
      });
    
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout NavList={NavList}/>}>
            <Route path="/" element={<HomePage link="/products" />} />
            <Route path="/contacts" Component={ContactsPage} />
            <Route path="/products" element={<ProductsPage products={products} Card={Card} />}/>
            <Route path="/products/:id" element={<SingleProduct minId={minId} maxId={maxId}></SingleProduct>} />
            <Route path="/404" element={<div className='m-auto mt-4 mb-4 text-center'><h1>404 Error</h1><p>Page not found</p></div>} />
          </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
