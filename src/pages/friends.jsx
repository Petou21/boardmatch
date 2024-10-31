import React, { useState } from 'react';

import User from '../assets/user.png'
import '../stylesheets/friends/friends.scss';
const groups = [
    {
      id:1,
      user: 'Bervatob',
      realname: 'Álvaro Guzmán',
      //description: 'Un grupo de entusiastas del Monopoly que se reúnen para dominar el tablero, negociar con astucia y construir imperios. Desde intensos duelos de estrategia hasta momentos de risas y camaradería, este grupo es el lugar perfecto para los aficionados que buscan diversión y no le temen al roce de rivalidad en cada partida. ¡Prepárense para hacer negocios y ganar grande!',
    },
    { 
      id:2,
      user: 'Nobruf',
      realname: 'Bruno Flores',
    },
    {
      id:3,
      user: 'xgreenshadow',
      realname: 'Carlos Vera',
    },
    {
      id:4,
      user: 'Jisoo Fan',
      realname: 'Benjamín Morales',
    },
    {
      id:5,
        user: 'flootonel',
        realname: 'Florencia Otonel',
    },
    {
      id:6,
        user: 'Tomaxido',
        realname: 'Tomás Castillo',
    },
    {
      id:7,
        user: 'Johannsonmanson',
        realname: 'Johann Vásquez',
    },
    {
      id:8,
        user: 'Milanator',
        realname: 'Milan Ujevic',
    },
    {
      id:9,
        user: 'menpho88',
        realname: 'Nicolás Cortés',
    },
    {
      id:10,
        user: 'pato_leigh',
        realname: 'Patricio Leigh',
    },
    {
      id:11,
        user: 'Peto',
        realname: 'Peto Campaña',
    },
  ];
  
  const Community = () => {
    return (
      <>
      <h1 style={{ textAlign: 'center', justifyContent: 'space-between', alignItems: 'flex-start'}}>Lista de amigos</h1>
      <div className="cardd-container">
        {groups.map((group, index) => (
          <div className="group-fiend-card" key={index}>
            <img src={User} alt={group.title} className="group-image" />
            <div className="group-content">
              <h2>{group.realname}</h2>
              <p>@{group.user}</p>
            </div>
            <a className="join-button" href={`/profile/${group.id}`} >
            Ver Perfil
            </a>
          </div>
        ))}
      </div>
    </>
    );
  };
  
export default Community;
