import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Card from '../Card/Card';
import './Board.css';
import {useHistory} from 'react-router-dom';
import {changeScore} from '../../redux/actions';

let score = 0;

const Board = (props) => {

  const [cards, setCards] = useState(props.cards);
  const [checkers, setCheckers] = useState([]);
  const [completed, setCompleted] = useState([]);

  const history = useHistory();

  const dispatch = useDispatch();

  const onCardClick = (card) => () => {
    score++;
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;
    const newCheckers = [...checkers, card];

    setCheckers(newCheckers);

    const cardsInCheckersMatched = validateCheckers(newCheckers);

    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type]);

      if (completed.length === 7) {
        dispatch(changeScore(score));
        score = 0;
        history.push('/scoreboard');
      }
    }

    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000);
    }

    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }

    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }

    function checkersFull(checkers) {
      return checkers.length === 2;
    }

    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([]);
      }, time);
    }
  };

  useEffect(() => {
    const newCards = cards.map((card) => ({
      ...card,
      flipped: checkers.find((c) => c.id === card.id) || completed.includes(card.type),
    }));
    setCards(newCards);
  }, [checkers, completed]);

  return (
    <div className='Board'>
      {cards.map((card) => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
    </div>
  );
};

export default Board;
