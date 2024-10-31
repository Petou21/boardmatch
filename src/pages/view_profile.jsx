import React from 'react';
import User from '../assets/user.png';
import { useParams } from 'react-router-dom';
import '../stylesheets/profile/profile.scss';
const groups = [
    {
      id:1,
      user: 'Bervatob',
      realname: 'Álvaro Guzmán',
      location: 'Puente Alto, Chile',
      description: 'buenas',
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


const ProfilePage = () => {
    const { id } = useParams();
    const specificGroup = groups.find(group => group.id === parseInt(id));
  return (
    <div className="profile-page">
      <div className="profile-page__header">
        <div className="profile-page__photo">
          <img src={User} alt="Foto de perfil" />
        </div>
        <div className="profile-page__details">
          <h2>{specificGroup.user}</h2>
          <p><strong>Nombre real:</strong> {specificGroup.realname}</p>
          <p><strong>Ubicación:</strong> {specificGroup.location}</p>
          <p><strong>Descripción:</strong> {specificGroup.description}</p>
        </div>
      </div>
      
      <div className="profile-page__achievements-container">
        <div className="profile-page__achievements">
            <h2>Juegos</h2>
            <p><strong>Monopoly</strong></p>
            <p><strong>Dungeons & Dragons</strong></p>
            <p><strong>Catan</strong></p>
            <p><strong>Ajedrez</strong></p>
        </div>
        <div className="profile-page__achievements">
            <h2>Logros</h2>
            <p><strong>Monopoly:</strong> Logro 1</p>
            <p><strong>Dungeons & Dragons:</strong> Logro 1</p>
            <p><strong>Catan:</strong> Logro 1</p>
            <p><strong>Ajedrez:</strong> Logro 1</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
