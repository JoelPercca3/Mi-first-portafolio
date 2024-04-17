import React from 'react';
import './App.css'
function Proyecto(props) {
  return (
    <div className="project">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p><a href={props.link}>Enlace al proyecto</a></p>
    </div>
  );
}

function Portafolio() {
  return (
    <div className="container">
      <h1>Mi Portafolio</h1>
      <Proyecto
        title="Proyecto 1"
        description="."
        link="#"
      />
      
      
    </div>
  );
}

export default Portafolio;
