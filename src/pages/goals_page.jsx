import React, {useState} from 'react';
import '../stylesheets/goals/goals.scss';


const achievementsData = {
    Monopoly: [
      'Completar una ronda sin perder propiedades',
      'Construir un hotel en Boardwalk',
      'Ganar sin ir a la cárcel',
      'Comprar todas las propiedades de un color',
      'Ganar todas las propiedades en subasta'
    ],
    'Dungeons and Dragons': [
      'Completar una misión principal',
      'Llegar a nivel 10 con un personaje',
      'Derrotar un dragón en combate',
      'Encontrar un objeto legendario',
      'Participar en una campaña de más de 10 sesiones'
    ],
    Ajedrez: [
      'Ganar una partida en menos de 20 movimientos',
      'Capturar a la reina del oponente',
      'Lograr un jaque mate con torre y rey',
      'Promocionar un peón',
      'Ganar tres partidas consecutivas'
    ],
    Catan: [
      'Construir la carretera más larga',
      'Ganar con más de 10 puntos',
      'Construir tres ciudades en una partida',
      'Robar la carta de mayor ejército',
      'Ganar sin perder ningún turno'
    ]
  };

const GoalsPage = () => {
    const [selectedGame, setSelectedGame] = useState('Monopoly');
    const [achievements, setAchievements] = useState(achievementsData['Monopoly']);
  
    const handleGameChange = (event) => {
      const game = event.target.value;
      setSelectedGame(game);
      setAchievements(achievementsData[game]);
    };
  
    return (
      <div className="achievements-container">
        <div className="selector">
          <h2>Selecciona un juego para ver sus logros</h2>
          <select value={selectedGame} onChange={handleGameChange} className="game-selector">
            {Object.keys(achievementsData).map((game) => (
              <option key={game} value={game}>{game}</option>
            ))}
          </select>
        </div>
  
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <label key={index} className="achievement-item">
              <input type="checkbox" />
              {achievement}
            </label>
          ))}
        </div>
      </div>
    );
  };
  
  export default GoalsPage;