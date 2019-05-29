// import react and styles

import React from "react";
import "./style.css";



//create function to export
function PokemonCard(props) {
 
  return(
   
    <div className="characterImg" onClick={() => props.handleCardClick(props.id)}>
    <div className="card">
      <div className="img-container col-2 pokemon-image">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
    </div>
  )
}

export default PokemonCard;