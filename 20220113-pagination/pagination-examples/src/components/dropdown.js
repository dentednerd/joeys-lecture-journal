import { useState } from 'react'

export default function Dropdown() {
  const [value, setValue] = useState('Red');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <h2>{value}</h2>
      <select
        defaultValue={value}
        onChange={handleChange}
      >
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
    </div>
  )
}
