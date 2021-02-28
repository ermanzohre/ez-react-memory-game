import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './ScoreBoard.css';

const ScoreBoard = () => {
  const history = useHistory();

  const players = useSelector((state) => state.players);

  // const players = [
  //   {name: 'erman', score: 10},
  //   {name: 'harun', score: 20},
  //   {name: 'gkg', score: 30},
  // ];

  const sortedPlayers = players.sort((a, b) => a.score - b.score);

  const handleClick = (e) => {
    history.push('/');
  };

  return (
    <div className='end-game'>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => {
            return (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className='message'>
        <h2>Well Done, {players[players.length - 1].name}</h2>
        <p>You think you can do it faster next time?</p>
        <button className='btn btn-primary' onClick={handleClick}>
          Go Again
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default ScoreBoard;
