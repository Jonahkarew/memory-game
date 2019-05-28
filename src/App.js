import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper"
import pokemon from './pokemon.json'
import PokemonCard from './components/pokemonCard';

class App extends Component {
  state = {
    pokemonList: pokemon,
    currentScore: 0,
    hiScore: 0
  }
  //function for shuffling cards

  shuffleCards = () => {
    const shuffledPokemonList = this.state.pokemonList.sort(() => 0.5 - Math.random());
  
    this.setState({
      pokemonList: shuffledPokemonList
    });
  };



  //method to click and change state of cards
  handleClickedCard = (id) => {
   
  }


  //render the cards
  render(){
    return (
      <Wrapper>
        <div className="container">
        <h1 className="title text-center">Pokemon Memory Game</h1>
        </div>
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
