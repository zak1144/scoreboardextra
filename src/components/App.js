import React, {Component} from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
  state = {
    players: [
      {
        name: "Saqib",
        score: 0,
        id: 1
      },
      {
        name: "Sana",
        score: 0,
        id: 2
      },
      {
        name: "Hafsah",
        score: 0,
        id: 3
      },
      {
        name: "Ebrahim",
        score: 0,
        id: 4
      }
    ]
  };

  handleScoreChange = (index,delta) => {
    //console.log('index: '+index ,'delta: '+delta);
    let prevData=this.state;
    
      this.setState({
        score: prevData.players[index].score += delta
      });
    
  }
  //player id counter
  prevPlayerId = 4;
  handleAddPlayer = (addName) => {
    this.setState({
      players:[
        ...this.state.players,
        {
        name: addName,
        score: 0,
        id: this.prevPlayerId += 1
        }
      ]
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  getHighScore = () => {
    
      const scores = this.state.players.map( p => p.score);
      const highScore = Math.max(...scores);
      if (highScore){
          return highScore;
      } 
      return null;
  }

  render() {
    const highScore = this.getHighScore();
    return (
      <div className="scoreboard">
        <Header 
          players={this.state.players} 
        />
  
        {/* Players list */}
        {this.state.players.map( (player,index) =>
          <Player 
            name={player.name}
            score={player.score}
            changeScore={this.handleScoreChange}
            index={index}
            id={player.id}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}
            isHighScore ={ highScore === player.score}           
          />
          )}
          <AddPlayerForm addPlayer={this.handleAddPlayer}/>
      </div>
    );
  }
}

export default App;
