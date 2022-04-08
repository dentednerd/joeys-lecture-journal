import { useState } from 'react';

const AddFilm = (props) => {
  console.log({ props });
  const [newFilm, setNewFilm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setFilmList((currFilms) => {
      return [
        newFilm,
        ...currFilms
      ]
    })
    setNewFilm({});
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        required
        onChange={(e) => {
          setNewFilm((currFilm) => {
            return {
              ...currFilm,
              title: e.target.value,
            }
          })
        }}
      />
      <label htmlFor="image-url">Image URL:</label>
      <input
        id="image-url"
        type="text"
        required
        onChange={(e) => {
          setNewFilm((currFilm) => {
            return {
              ...currFilm,
              img: e.target.value,
            }
          })
        }}
      />
      <label htmlFor="description">Description:</label>
      <input
        id="description"
        type="text"
        required
        onChange={(e) => {
          setNewFilm((currFilm) => {
            return {
              ...currFilm,
              description: e.target.value,
            }
          })
        }}
      />
      <button id="submit-button">Add To List</button>
    </form>
  );
}

export default AddFilm;
