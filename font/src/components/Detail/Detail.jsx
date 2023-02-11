import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./Detail.module.css"

export default function Detail(){

    const [character, setCharacter] = useState({})

    const { detailId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                console.log(char)
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
      
    return(
        <div className={styles.container}>
          <div className={styles.personcontainer}>
            <Link to='/home' className={styles.cit}><button>To Home</button></Link>
            <div className={styles.info}>
              <h1>{character.name}</h1>
              <h2>{character.gender}</h2>
              <h2>{character.status}</h2>
              <h2>{character.origin?.name}</h2>
              <h2>{character.location?.name}</h2>
              <img src={character.image} alt='not found'/>
            </div>
          </div>
        </div>
    )
}
