import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "../assets/logo.png"

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className='nav-bar'>
      <nav className="logo-container">
        <a class="link" href="/">
          <img className="logo-img" src={Logo} alt="Logo" style={{ height: '40px', width: 'auto' }} />
          <h1 class="layout__title" >BoardMatch</h1>
        </a>
      </nav>
      <NavLink className={navLinkClass} to='/comunidades'>
        Comunidades
      </NavLink>
      <NavLink className={navLinkClass} to='/logros'>
        Logros
      </NavLink>
      <NavLink className={navLinkClass} to='/metas'>
        Metas
      </NavLink>
      <NavLink className={navLinkClass} to='/amigos'>
        Amigos
      </NavLink>
      <NavLink className={navLinkClass} to='/perfil'>
        Perfil
      </NavLink>
    </nav>
  );
};
 
export default NavBar


