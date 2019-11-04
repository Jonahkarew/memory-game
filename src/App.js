import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/Wrapper"
import pokemonData from './pokemon.json'

class App extends Component {
  state = {
    pokemonData: [...pokemonData],
    currentScore: 0,
    hiScore: 0
  };
  //function for shuffling cards

  // shuffleCards = () => {
  //   const shuffledPokemonList = this.state.pokemonList.sort(() => 0.5 - Math.random());
  
  //   this.setState({
  //     pokemonList: shuffledPokemonList
  //   });
  // };


  
  //method to click and change state of cards
  handleCardClick = cardId => {
   
    let isCorrect = false;

    const pokemonData = [...this.state.pokemonData];

    pokemonData.forEach(pokemon => {
      if (pokemon.id === cardId){
        if(!pokemon.clicked){
          isCorrect = true;
          pokemon.clicked = true;
        }
      }
    })

    isCorrect ? this.rightChoice(pokemonData) : this.wrongChoice(pokemonData)
  };

  rightChoice = pokemonData => {
    const randomize = pokemonData.sort(() => 0.5 - Math.random());
    const currentScore = this.state.currentScore + 1;
    var hiScore = this.state.hiScore;

    if (currentScore > hiScore){
      hiScore = currentScore;
    }
    this.setState({
      pokemonData: randomize,
      currentScore: currentScore,
      hiScore: hiScore
    })
     
  }

  //what happens when an image has already been clicked and is clicked again
  wrongChoice = pokemonData => {
    //randomize order of cards
    const randomize = pokemonData.sort(() => 0.5 - Math.random());
    // sets clicked state back to false
    randomize.forEach(pokemon => (pokemon.clicked =false));

    //shuffles the cards and resets the score
    this.setState({
      pokemonData: randomize,
      currentScore: 0
    })
  }
  
  

  //render the cards
  render(){
    // const {pokemonList} = this.state;

    return (
      <Wrapper>
        <div className="container">
        <h1 className="title text-center">Pokemon Memory Game</h1>
        
        <div className="text-center scoreDiv">Current Score: {this.state.currentScore} ||| Highscore: {this.state.hiScore}</div>
        <div className='text-center instructionsDiv'>Try to click all 151 Pokemon without clicking the same one twice!</div>
        <div className='text-center instructionsDiv'> Click anywhere to start!</div>
        {
          <div className="row">
            {this.state.pokemonData.map(pokemon => {
             return(
              <div className="pokemon" key={pokemon.id}>
                <div className="img-container col-2 col-sm-3">
                  <img src={pokemon.image}
                            alt={pokemon.name}
                            className="pokemonImage"
                            onClick={() => this.handleCardClick(pokemon.id)}
                  />
                </div>
              </div>
            )
        })}
      </div>
        }
        </div>
      </Wrapper>
    )
  }
}

export default App;
