import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = (e) => {
      const { value } = e.target;
      console.log(value)
      setCharacter(value)
   }

   return (
      <div className="input">
         <input type='search' placeholder='Buscar'  onChange={handleChange} />
      <button onClick={() => props.onSearch(character)}>Agregar</button> 
      </div>
   );
}
