import { useState, useEffect } from 'react';
import * as gamesApi from '../../api';

const ITEM_LIMIT = 5;

const List = () => {
  const [games, setGames] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);

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
      <ul>
        {games.map((game) => (
          <li key={game.game_id}>{game.game_title}</li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => {
          setPage((currPage) => currPage - 1)
        }}
      >
        Previous
      </button>
      <button
        disabled={ITEM_LIMIT * page >= totalCount}
        onClick={() => {
          setPage((currPage) => currPage + 1)
        }}
      >
        Next
      </button>
    </>
  );
};

export default List;
