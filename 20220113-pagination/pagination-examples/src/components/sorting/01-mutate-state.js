import { useState } from 'react';

const List = () => {
  const [items, setItems] = useState(['banana', 'aardvark']);

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          // mutation: BAD!
          setItems((items) => items.sort());
          console.log(items);
          //  avoiding mutation: GOOD!
          // setItems((items) => [...items].sort());
        }}
      >
        Sort alphabetically
      </button>
      <p>Check logs after sorting!</p>
    </>
  );
};

export default List;
