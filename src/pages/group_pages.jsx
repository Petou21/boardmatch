import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Ajedrez from "../assets/ajedrez.png";
import DYD from "../assets/dyd.png";
import Catan from "../assets/catan.jpeg";
import Monopoly from "../assets/monopoly.jpeg";
import '../stylesheets/group/group.scss';

const groups = [
  {  
    id: 1,  
    title: 'Los Magnates del Monopoly',
    description: 'Un grupo de entusiastas del Monopoly que se reúnen para dominar el tablero, negociar con astucia y construir imperios. Desde intensos duelos de estrategia hasta momentos de risas y camaradería, este grupo es el lugar perfecto para los aficionados que buscan diversión y no le temen al roce de rivalidad en cada partida. ¡Prepárense para hacer negocios y ganar grande!',
    usuarios: '18',
    image: Monopoly,
  },
  {
    id: 2,  
    title: 'Los Exploradores de Catan',
    description: 'Un grupo de valientes aventureros que se sumergen en épicas campañas de Dungeons & Dragons. Armados con dados y estrategias, deambulan mundos fantásticos, enfrentan monstruos temibles y desentrañan misterios antiguos. Cada sesión es una nueva oportunidad para forjar leyendas y crear historias inolvidables, donde la imaginación no tiene límites y la amistad se fortalece en cada desafío. ¡Prepárense para una aventura que quedará grabada en la historia de sus personajes!',
    usuarios: '7',
    image: Catan,
  },
  {
    id: 3,    
    title: 'Los Dragones del Destino',
    description: 'Un grupo de valientes aventureros que se sumergen en épicas campañas de Dungeons & Dragons. Armados con dados y estrategias, deambulan mundos fantásticos, enfrentan monstruos temibles y desentrañan misterios antiguos. Cada sesión es una nueva oportunidad para forjar leyendas y crear historias inolvidables, donde la imaginación no tiene límites y la amistad se fortalece en cada desafío. ¡Prepárense para una aventura que quedará grabada en la historia de sus personajes!',
    usuarios: '18',
    image: DYD, 
  },
  {
    id: 4,  
    title: 'Los Maestros del Tablero',
    description: 'Un grupo de estrategas y entusiastas del ajedrez que se enfrentan en intensas batallas mentales. Con cada movimiento, ponen a prueba su capacidad intelectual y la estrategia, afinando sus habilidades en cada partida. Entre ellos, la pasión por el ajedrez se convierte en el ingrediente perfecto para desafiar respeto y camaradería, ¡Únete y demuestra que tienes lo que se necesita para ser un verdadero maestro del tablero!',
    usuarios: '18',
    image: Ajedrez,
  }
];

const mensajes = [
  "¡Disfrutando una partida intensa!",
  "¿Alguien para jugar en línea?",
  "Consejos para principiantes, por favor",
  "¿Cuál es tu estrategia favorita?",
  "Disfruté la última partida con amigos",
  "¡Un juego lleno de sorpresas!",
  "¿Alguien quiere unirse?",
  "¿Qué estrategias recomiendan?",
  "Increíble juego anoche",
  "¡Ganamos todos!"
];

const usuarios = [
  "Bervatob", "Nobruf", "xgreenshadow", "Jisoo Fan", 
  "flootonel", "Tomaxido", "Johannsonmanson", "Milanator",
  "menpho88", "pato_leigh","Peto"
];

const GroupInfo = () => {
  const { id } = useParams();
  const specificGroup = groups.find(group => group.id === parseInt(id));
  const [go, setGo] = useState(Array(groups.length).fill(false));
  const [mensajesConUsuarios, setMensajesConUsuarios] = useState([]);

  useEffect(() => {
    const obtenerMensajesConUsuarios = () => {
      const mensajesAleatorios = [];
      const mensajesDisponibles = [...mensajes]; 
      const usuariosDisponibles = [...usuarios]; 

      while (mensajesAleatorios.length < 4 && mensajesDisponibles.length > 0) {
        const mensajeIndex = Math.floor(Math.random() * mensajesDisponibles.length);
        const usuarioIndex = Math.floor(Math.random() * usuariosDisponibles.length);
        
        const mensaje = mensajesDisponibles[mensajeIndex];
        const usuario = usuariosDisponibles[usuarioIndex];

        mensajesAleatorios.push({ usuarioIndex, mensaje, usuario });

        mensajesDisponibles.splice(mensajeIndex, 1);
        usuariosDisponibles.splice(usuarioIndex, 1); 
      }

      return mensajesAleatorios;
    };

    setMensajesConUsuarios(obtenerMensajesConUsuarios());
  }, [specificGroup]);

  const handleJoinClickG = (index) => {
    const newGo = [...go];
    newGo[index] = !newGo[index];  
    setGo(newGo);
  };

  if (!specificGroup) {
    return <p>Grupo no encontrado.</p>;
  }

  return (
    <div className="group-page">
      <div className="group-page__header">
        <div className="group-page__photo">
          <img src={specificGroup.image} alt="Foto de perfil" />
        </div>
        <div className="group-page__details">
          <h2>{specificGroup.title}</h2>
          <p><strong>Usuarios en el Grupo:</strong> {specificGroup.usuarios}</p>
          <p><strong>Descripción:</strong> {specificGroup.description}</p>
          <button
            className={`join-button ${go[specificGroup.id - 1] ? 'go' : ''}`}
            onClick={() => handleJoinClickG(specificGroup.id - 1)}
          >
            {go[specificGroup.id - 1] ? '¡Unido!' : '¿Unirte?'}
          </button>
        </div>
      </div>
      <div className="group-page__foro_container">
        <div className="group-page__foro">
          <h2>Foro de la comunidad</h2>
          <div className="comentarios-container">
          {mensajesConUsuarios.map((item, index) => (
            <div key={index} className="foro_coment">
                <strong>
                <a href={`/profile/${item.usuarioIndex+1}`} className="usuario-enlace">
                    {item.usuario}
                </a>:
                </strong>
                <p>{item.mensaje}</p>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupInfo;
