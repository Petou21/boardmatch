import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from '../components/footer.jsx';
import HomePage from '../pages/home_page'
import Comunity from '../pages/comunity_page'
import Logros from '../pages/achievements_page'
import Perfil from '../pages/user_page.jsx'
import Amigos from '../pages/friends.jsx'
import Ver_Perfil from '../pages/view_profile.jsx'
import Ver_Grupo from '../pages/group_pages.jsx'
import Goals from '../pages/goals_page.jsx'

import Logo from "../assets/logo.png"
import '../stylesheets/Layout.scss';

import NavBar from '../components/nav_bar'

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="Layout">
        <div className="content">
          <div className='layout'>
            <NavBar />
        </div>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/comunidades' element={<Comunity />} />
              <Route path='/logros' element={<Logros />} />
              <Route path='/perfil' element={<Perfil />} />
              <Route path='/amigos' element={<Amigos />} />
              <Route path='/metas' element={<Goals />} />
              <Route path='/profile/:id' element={<Ver_Perfil />} />
              <Route path='/group/:id' element={<Ver_Grupo />} />
            </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default Layout

