import React, { useState } from 'react';
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

const additionalAchievements = {
    Monopoly: [
        'Ganar sin comprar propiedades',
        'Ganar con todas las propiedades en hipoteca',
        'Superar a un jugador con todos los hoteles ocupados'
    ],
    'Dungeons and Dragons': [
        'Hacer un crítico con cada tipo de arma',
        'Salvar a un personaje con 1 HP',
        'Vencer a un grupo de orcos sin perder vida'
    ],
    Ajedrez: [
        'Ganar una partida solo con peones',
        'Matar una torre con un alfil',
        'Ganar sin mover la reina en toda la partida'
    ],
    Catan: [
        'Ganar sin construir carreteras',
        'Obtener la mayor cantidad de cartas de recurso sin usarlas',
        'Construir solo asentamientos, sin ciudades'
    ]
};

const GoalsPage = () => {
    const [selectedGame, setSelectedGame] = useState('Monopoly');
    const [achievements, setAchievements] = useState([...achievementsData['Monopoly']]);
    const [achievementsStatus, setAchievementsStatus] = useState({
        Monopoly: Array(achievementsData['Monopoly'].length).fill(false),
        'Dungeons and Dragons': Array(achievementsData['Dungeons and Dragons'].length).fill(false),
        Ajedrez: Array(achievementsData['Ajedrez'].length).fill(false),
        Catan: Array(achievementsData['Catan'].length).fill(false)
    });
    const [showCongrats, setShowCongrats] = useState(false);

    const handleGameChange = (event) => {
        const game = event.target.value;
        setSelectedGame(game);
        setAchievements([...achievementsData[game]]);
    };

    const handleAchievementCheck = (index) => {
        setShowCongrats(true);

        setAchievementsStatus((prevStatus) => {
            const updatedStatus = { ...prevStatus };
            updatedStatus[selectedGame][index] = true;
            return updatedStatus;
        });

        const newAchievement = additionalAchievements[selectedGame].shift();
        if (newAchievement) {
            setAchievements((prev) => [...prev, newAchievement]);
            setAchievementsStatus((prevStatus) => {
                const updatedStatus = { ...prevStatus };
                updatedStatus[selectedGame].push(false);
                return updatedStatus;
            });
        }

        setTimeout(() => setShowCongrats(false), 2000);
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
                        <input
                            type="checkbox"
                            checked={achievementsStatus[selectedGame][index]}
                            onChange={() => handleAchievementCheck(index)}
                            disabled={achievementsStatus[selectedGame][index]}
                        />
                        {achievement}
                    </label>
                ))}
            </div>

            {showCongrats && (
                <div className="congrats-message">
                    ¡Felicidades por completar una meta!
                </div>
            )}
        </div>
    );
};

export default GoalsPage;
