import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper"
import pokemon from './pokemon.json'
import PokemonCard from './components/pokemonCard';

class App extends Component {
  state = {
    pokemonList: pokemon
  }

  //render the cards
  render(){
    return (
      <Wrapper>
        <h1 className="title">Pokemon Memory Game</h1>
        {
          this.state.pokemonList.map(pokemon => {
            return (
              <PokemonCard 
              key = {pokemon.id}
              image = {pokemon.image}
              />
            )
          })
        }
      </Wrapper>
    )
  }
}

export default App;
