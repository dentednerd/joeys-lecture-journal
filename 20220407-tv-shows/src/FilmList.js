export default function FilmList({ films }) {
  return (
    <ul>
      {films.map((film) => {
        return (
          <li key={film.title} className="">
            <h2>{film.title}</h2>
            <img src={film.img} alt={film.title} />
            <p>{film.description}</p>
          </li>
        )
      })}
    </ul>
  );
}
