import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import LightbulbPage from '../pages/lightbulb_page'

import Logo from "../assets/logo.png"


import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className='layout'>
        <div className="container">
          <a class="link" href="/">
            <img class="logo-img" src={Logo} alt="Logo" ></img>
            <h1 class="layout__title" >BoardMatch</h1>
          </a>
            <NavBar />
        </div>
      </div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/lightbulb' element={<LightbulbPage />} />
          </Routes>
    </BrowserRouter>
  )
}

export default Layout

