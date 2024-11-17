import React from 'react';
import User from '../assets/user.png';
import '../stylesheets/profile/profile.scss';

const gameGoals = {
    Monopoly: ["Comprar todas las propiedades de un mismo color", "Construir un hotel en una propiedad", "Ser el jugador con más dinero", "No caer en la cárcel durante tres turnos consecutivos", "Ganar el juego dejando a los demás en bancarrota"],
    "Dungeons & Dragons": ["Subir al nivel 5 sin morir", "Desarrollar una relación con un PNJ", "Desbloquear una habilidad especial", "Completar una misión secundaria con éxito", "Derrotar a un jefe en solitario"],
    Catan: ["Construir una ciudad en cada tipo de terreno", "Ser el primero en alcanzar 10 puntos de victoria", "Construir la carretera continua más larga", "Comerciar exitosamente con todos los jugadores", "Obtener la carta de ejército más grande"],
    Ajedrez: ["Ganar sin perder una pieza", "Lograr jaque mate en menos de 10 movimientos", "Capturar la reina del oponente", "Realizar un jaque mate con solo dos piezas", "Ganar tres partidas seguidas"]
};

const getRandomGoals = (goals) => {
    const numGoals = Math.floor(Math.random() * goals.length) + 1;
    const selectedGoals = [];
    const goalsCopy = [...goals];

    for (let i = 0; i < numGoals; i++) {
        const randomIndex = Math.floor(Math.random() * goalsCopy.length);
        selectedGoals.push(goalsCopy.splice(randomIndex, 1)[0]);
    }

    return selectedGoals;
};

const ProfilePage = () => {
    const randomGoals = {
        Monopoly: getRandomGoals(gameGoals.Monopoly),
        "Dungeons & Dragons": getRandomGoals(gameGoals["Dungeons & Dragons"]),
        Catan: getRandomGoals(gameGoals.Catan),
        Ajedrez: getRandomGoals(gameGoals.Ajedrez)
    };

    return (
        <div className="profile-page">
            <div className="profile-page__header">
                <div className="profile-page__photo">
                    <img src={User} alt="Foto de perfil" />
                </div>
                <div className="profile-page__details">
                    <h2>Xavi</h2>
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
                    {Object.entries(randomGoals).map(([game, goals], index) => (
                        <div key={index}>
                            <p><strong>{game}:</strong></p>
                            <ul>
                                {goals.map((goal, i) => (
                                    <li key={i}>{goal}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
