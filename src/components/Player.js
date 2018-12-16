import React , {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent{

  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    score: PropTypes.number.isRequired,
    index: PropTypes.number,
    isHighScore: PropTypes.bool
  }

  render(){
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      changeScore
    } = this.props;
    console.log(this.props.name+' player rendered');

      return (
          <div className="player">
            <span className="player-name">
              <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
              <Icon isHighScore={ this.props.isHighScore }/>
              { name }
            </span>
      
            <Counter score={score} 
            changeScore={changeScore} 
            index={index}/>
          </div>
        );
  }
}

  export default Player;