import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { useThemeHook } from './GlobalComponents/ThemeProvider'
import Header from './components/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './components/Cart'
const App = () => {
  const [theme] = useThemeHook()


  return (
    <main className={theme ? 'bg-black' : 'bg-light-2'}>

      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/cart" element={ <Cart /> } />
        </Routes>
      </Router>
    </main>
  )
}

export default App;
