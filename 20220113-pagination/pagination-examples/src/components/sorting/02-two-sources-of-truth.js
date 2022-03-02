import { useState } from 'react';

const List = () => {
  const [items, setItems] = useState(['banana', 'aardvark']);
  const [sort, setSort] = useState('a -> z');

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Sorted {sort}</p>
      <button
        onClick={() => {
          setSort('a -> z');
          setItems((items) => [...items].sort());
        }}
      >
        Sort a to z
      </button>
      <button
        onClick={() => {
          setSort('z -> a');
          setItems((items) => {
            return [...items].sort((a, b) => {
              return b.localeCompare(a);
            });
          });
        }}
      >
        Sort z to a
      </button>
    </>
  );
};

export default List;
