import React, { useState } from 'react';
import '../stylesheets/archie/archievements.scss';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedAchievement, setSelectedAchievement] = useState('');

  const handleAddAchievement = () => {
    if (selectedGame && selectedAchievement) {
      setAchievements([...achievements, { game: selectedGame, achievement: selectedAchievement }]);
      setSelectedGame('');
      setSelectedAchievement('');
    }
  };

  return (
    <div className="achievements-container">
      <div className="add-achievement-section">
        <h2>Añadir un Logro</h2>
        <div className="selectors">
          <select
            className="select-game"
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
          >
            <option value="">Selecciona un juego</option>
            <option value="Monopoly">Monopoly</option>
            <option value="Catan">Catan</option>
            <option value="D&D">Dungeons & Dragons</option>
          </select>
          <select
            className="select-achievement"
            value={selectedAchievement}
            onChange={(e) => setSelectedAchievement(e.target.value)}
          >
            <option value="">Selecciona un logro</option>
            <option value="Victoria épica">Victoria épica</option>
            <option value="Explorador supremo">Explorador supremo</option>
            <option value="Maestro estratega">Maestro estratega</option>
          </select>
        </div>
        <div className="button-container">
            <button className="add-button" onClick={handleAddAchievement}>
            Insertar Logro
            </button>
        </div>
      </div>

      <div className="achievements-list">
        <h2>Logros Obtenidos</h2>
        <ul>
          {achievements.map((ach, index) => (
            <li key={index}>
              {ach.game} - {ach.achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Achievements;

