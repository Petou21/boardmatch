import React from 'react';
import User from '../assets/user.png';
import '../stylesheets/profile/profile.scss';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-page__header">
        <div className="profile-page__photo">
          <img src={User} alt="Foto de perfil" />
        </div>
        <div className="profile-page__details">
          <h2>Nombre del Usuario</h2>
          <p><strong>Nombre real:</strong> Javier Gómez</p>
          <p><strong>Ubicación:</strong> Chile, Paine</p>
          <p><strong>Descripción:</strong> El xavi</p>
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
