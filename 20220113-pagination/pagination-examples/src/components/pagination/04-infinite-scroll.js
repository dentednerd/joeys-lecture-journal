import { useState, useEffect } from 'react';
import * as gamesApi from '../../api';

const PAGE_LENGTH = 5;

const List = () => {
  const [games, setGames] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const numberOfPages = Math.ceil(totalCount / PAGE_LENGTH);

  useEffect(() => {
    setIsLoading(true);
    gamesApi
      .getGames({ page })
      .then(({ games, total_count }) => {
        setGames((currentGames) => [...currentGames, ...games]);
        setTotalCount(total_count);
        setIsLoading(false);
      })
      .catch(console.log);
  }, [page]);

  useEffect(() => {
    function handleScroll() {
      const isCloseToBottomOfPage =
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight;
      const isOnLastPage = numberOfPages < page;
      if (isCloseToBottomOfPage && !isLoading && !isOnLastPage) {
        setPage((currentPage) => currentPage + 1);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, numberOfPages, page]);

  return (
    <>
      <ul>
        {games.map((game) => (
          <li key={game.game_id}>{game.game_title}</li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
    </>
  );
};

export default List;
