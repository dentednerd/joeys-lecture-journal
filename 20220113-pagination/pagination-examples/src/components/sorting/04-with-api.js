import { useState, useEffect } from 'react';
import * as gamesApi from '../../api';

const List = () => {
  const [games, setGames] = useState([]);
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    gamesApi
      .getGames({ order })
      .then(({ games }) => {
        setGames(games);
      })
      .catch(console.log);
  }, [order]);

  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.game_id}>{game.game_title}</li>
        ))}
      </ul>
      <p>Sorted {order}</p>
      <button onClick={() => setOrder('asc')}>Sort a to z</button>
      <button onClick={() => setOrder('desc')}>Sort z to a</button>
    </>
  );
};

export default List;
