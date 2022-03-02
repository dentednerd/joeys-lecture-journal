import { useState, useEffect } from 'react';
import * as gamesApi from '../../api';

const PAGE_LENGTH = 5;

const List = () => {
  const [games, setGames] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

  const numberOfPages = Math.ceil(totalCount / PAGE_LENGTH);

  useEffect(() => {
    gamesApi
      .getGames({ page })
      .then(({ games, total_count }) => {
        setGames(games);
        setTotalCount(total_count);
      })
      .catch(console.log);
  }, [page]);

  return (
    <>
      <h3>Page {page}</h3>
      <ul>
        {games.map((game) => (
          <li key={game.game_id}>{game.game_title}</li>
        ))}
      </ul>
      {new Array(numberOfPages).fill().map((_, i) => {
        return (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            disabled={i + 1 === page}
          >
            {i + 1}
          </button>
        );
      })}
    </>
  );
};

export default List;
