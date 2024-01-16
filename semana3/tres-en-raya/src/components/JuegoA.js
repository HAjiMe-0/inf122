import React from "react";
import TableroD from "./TableroC";
import { useState } from "react";
function juego{
    const[cuadros, setCuadros]= useState(Array(9).fill(null));
    const[jugador, setJugador]= useState ("X")
    const cuadrosTemp=[...cuadros];

    const click = (1) => {
        console.log("pos: "+i);
        console.log("turno: ", jugador);
        const cuadrosTemp = [...cuadros];
        
        if(cuadrosTemp[1] == null);
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        console.log("array", cuadrosTemp);
        setJugador(jugador=== "X" ? "O": "X");
    }
}