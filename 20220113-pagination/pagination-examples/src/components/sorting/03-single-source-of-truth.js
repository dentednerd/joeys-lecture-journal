import { useState, useEffect } from 'react';

const List = () => {
  const [items, setItems] = useState(['banana', 'aardvark']);
  const [sort, setSort] = useState('a -> z');

  useEffect(() => {
    if (sort === 'a -> z') {
      setItems((items) => [...items].sort());
    } else {
      setItems((items) => {
        return [...items].sort((a, b) => {
          return b.localeCompare(a);
        });
      });
    }
  }, [sort]);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Sorted {sort}</p>
      <button onClick={() => setSort('a -> z')}>Sort a to z</button>
      <button onClick={() => setSort('z -> a')}>Sort z to a</button>
    </>
  );
};

export default List;
