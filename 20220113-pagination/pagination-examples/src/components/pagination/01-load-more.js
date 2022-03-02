import { useState, useEffect } from 'react';
import * as gamesApi from '../../api';

const List = () => {
  const [games, setGames] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    gamesApi
      .getGames({ page })
      .then(({ games, total_count }) => {
        setGames((currentGames) => [...currentGames, ...games]);
        setTotalCount(total_count);
      })
      .catch(console.log);
  }, [page]);

  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.game_id}>{game.game_title}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setPage((currentPage) => currentPage + 1);
        }}
        disabled={games.length >= totalCount}
      >
        Load More
      </button>
    </>
  );
};

export default List;
