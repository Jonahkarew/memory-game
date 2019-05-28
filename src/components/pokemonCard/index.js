// import react and styles

import React from "react";
import "./style.css";

//create function to export

function PokemonCard(props) {
  return(
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  )
}

export default PokemonCard;