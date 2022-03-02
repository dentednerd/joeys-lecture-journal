import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://northgamers.herokuapp.com/api',
});

export const getGames = async ({ order = 'asc', page = 1 }) => {
  const { data } = await gamesApi.get('/games', {
    params: { order, sort: 'game_title', p: page },
  });
  return data;
};
