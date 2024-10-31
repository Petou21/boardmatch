import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link'];
    if (isActive) classes.push('nav-bar__link--active');
    return classes.join(' ');
  };

  return (
    <nav className='nav-bar'>
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


