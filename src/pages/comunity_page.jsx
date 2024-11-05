import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ajedrez from "../assets/ajedrez.png";
import DYD from "../assets/dyd.png";
import Catan from "../assets/catan.jpeg";
import Monopoly from "../assets/monopoly.jpeg";
import '../stylesheets/comunity/comunity.scss';

const groups = [
    {
      id: 1,
      title: 'Los Magnates del Monopoly',
      description: 'Un grupo de entusiastas del Monopoly que se reúnen para dominar el tablero, negociar con astucia y construir imperios. Desde intensos duelos de estrategia hasta momentos de risas y camaradería, este grupo es el lugar perfecto para los aficionados que buscan diversión y no le temen al roce de rivalidad en cada partida. ¡Prepárense para hacer negocios y ganar grande!',
      image: Monopoly,
    },
    {
      id: 2,
      title: 'Los Exploradores de Catan',
      description: 'Un equipo de aventureros que se embarcan en emocionantes expediciones para la isla de Catan. Juntos, exploran, construyen y comercian para convertir recursos en ciudades y carreteras, siempre con la mirada puesta en la victoria. Sus partidas desafían sus habilidades estratégicas y disfrutan de la experiencia llena de ingenio y camaradería. ¡Únete a ellos y descubre que tan lejos puedes llegar en la conquista de Catan!',
      image: Catan,
    },
    {
      id: 3,
      title: 'Los Dragones del Destino',
      description: 'Un grupo de valientes aventureros que se sumergen en épicas campañas de Dungeons & Dragons. Armados con dados y estrategias, deambulan mundos fantásticos, enfrentan monstruos temibles y desentrañan misterios antiguos. Cada sesión es una nueva oportunidad para forjar leyendas y crear historias inolvidables, donde la imaginación no tiene límites y la amistad se fortalece en cada desafío. ¡Prepárense para una aventura que quedará grabada en la historia de sus personajes!',
      image: DYD, 
    },
    {
      id: 4,
      title: 'Los Maestros del Tablero',
      description: 'Un grupo de estrategas y entusiastas del ajedrez que se enfrentan en intensas batallas mentales. Con cada movimiento, ponen a prueba su capacidad intelectual y la estrategia, afinando sus habilidades en cada partida. Entre ellos, la pasión por el ajedrez se convierte en el ingrediente perfecto para desafiar respeto y camaradería, ¡Únete y demuestra que tienes lo que se necesita para ser un verdadero maestro del tablero!',
      image: Ajedrez,
    }
];

const events = [
    {
      title: "Torneo de Monopoly",
      description: "Un emocionante torneo donde los jugadores competirán para construir el imperio más grande. ¡Demuestra tus habilidades financieras y tu astucia para ganar!",
      date: "2024-11-10",
      location: "Centro de Convenciones, Ciudad Central",
    },
    {
      title: "Expedición Catan",
      description: "Acompáñanos en una expedición de fin de semana para conquistar la isla de Catan. Se harán varias partidas en modo torneo con grandes premios.",
      date: "2024-12-03",
      location: "Parque Nacional Isla Catan",
    },
    {
      title: "Noche de Dragones & Mazmorras",
      description: "Un evento nocturno especial para los amantes de D&D. Cada mesa tendrá un Dungeon Master experimentado para guiar a los jugadores a través de épicas aventuras.",
      date: "2024-11-17",
      location: "Café de Juegos, Calle Principal 123",
    },
    {
      title: "Campeonato de Ajedrez",
      description: "Una competencia intensa donde los mejores jugadores de ajedrez demostrarán sus estrategias. Abierto tanto para principiantes como para expertos.",
      date: "2024-12-15",
      location: "Club de Ajedrez, Avenida Libertador 456",
    },
    {
      title: "Fiesta de Fin de Año de Juegos de Mesa",
      description: "Celebra el fin de año con una variedad de juegos de mesa. Habrá premios, comida y mucha diversión para todos los asistentes.",
      date: "2024-12-31",
      location: "Salón de Eventos Fiesta, Calle Fiesta 789",
    },
];

const Community = () => {
    const [joined, setJoined] = useState(Array(groups.length).fill(false));
    const [go, setGo] = useState(Array(events.length).fill(false));
    const [activeTab, setActiveTab] = useState("Grupos");
    const navigate = useNavigate(); // Habilita la navegación

    const handleJoinClickJ = (index) => {
      const newJoined = [...joined];
      newJoined[index] = !newJoined[index];  
      setJoined(newJoined);

      if (newJoined[index]) {
        navigate(`/group/${groups[index].id}`); // Redirige a la ruta con el id del grupo
      }
    };

    const handleJoinClickG = (index) => {
      const newGo = [...go];
      newGo[index] = !newGo[index];  
      setGo(newGo);
    };

    const renderGroups = () => (
      <div className="group-list">
        <h1>Listado de Grupos</h1>
        {groups.map((group, index) => (
          <div className="group-card" key={group.id}>
            <img src={group.image} alt={group.title} className="group-image" />
            <div className="group-content">
              <h2>{group.title}</h2>
              <p>{group.description}</p>
            </div>
            <button
              className={`join-button ${joined[index] ? 'joined' : ''}`}
              onClick={() => handleJoinClickJ(index)}
            >
              {joined[index] ? 'Ver grupo' : 'Ver Grupo'}
            </button>
          </div>
        ))}
      </div>
    );

    const renderEvents = () => (
      <div className="group-list">
        <h1>Listado de Eventos</h1>
        {events.map((event, index) => (
          <div className="group-card" key={index}>
            <div className="group-content">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p><strong>Fecha:</strong> {event.date}</p>
              <p><strong>Ubicación:</strong> {event.location}</p>
            </div>
            <button
              className={`join-button ${go[index] ? 'go' : ''}`}
              onClick={() => handleJoinClickG(index)}
            >
              {go[index] ? 'Confirmado' : '¿Asistir?'}
            </button>
          </div>
        ))}
      </div>
    );

    return (
      <div>
        <div className="tabs">
          <button
            className={activeTab === "Grupos" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Grupos")}
          >
            Grupos
          </button>
          <button
            className={activeTab === "Eventos" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Eventos")}
          >
            Eventos
          </button>
        </div>

        {activeTab === "Grupos" ? renderGroups() : renderEvents()}
      </div>
    );
};

export default Community;
