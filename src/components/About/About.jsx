import React from "react";
import styles from "./About.module.css"
import imagen from './Sintitulo.png'



export default function About () {
    return(
        
        <div>
            <img alt="imagen rick and morty" className="imagen" src={imagen} 
            width="75%" margin="8px" display="flex" align-items="center" justify-content="center" />
         </div>
    )
}