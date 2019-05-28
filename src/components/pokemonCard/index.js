// import react and styles

import React from "react";
import "./style.css";



//create function to export
function PokemonCard(props) {
 
  return(
    <span onClick={() => console.log("something")}>
    <div className="card">
      <div className="img-container col-2 pokemon-image">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
    </span>
  )
}

export default PokemonCard;