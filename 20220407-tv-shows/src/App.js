import { useState } from 'react';
import FilmList from './FilmList';
import AddFilm from './AddFilm';
import baseFilms from './baseFilms';

function App() {
  const [filmList, setFilmList] = useState(baseFilms);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix and Shrel</h1>
      </header>
      <main>
        <FilmList films={filmList} />
        <AddFilm filmList={filmList} setFilmList={setFilmList} />
      </main>
    </div>
  );
}

export default App;
