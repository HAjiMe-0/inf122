import React from 'react';
import Historial from './Historial';
import TableroD from './TableroD';
import { useState } from 'react';
import '../style/Juego.css'


function Juego() {
    const [historial, setHistorial] = useState([
        {
            cuadros: Array(9).fill(null)
        },
    ]);
    const [nroMovimiento, setNroMovimiento] = useState(0);
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState("X");
    const [ganador, setGanador] = useState(null);
    const click = (i) => {
        const nuevoMovimiento = historial.slice(0, nroMovimiento + 1);
        console.log("nuevoMovimiento", nuevoMovimiento);
        const movimientoActual = nuevoMovimiento[nuevoMovimiento.length - 1];
        console.log("movimientoActual", movimientoActual);
        const cuadros = movimientoActual.cuadros.slice();
        console.log("cuadrosTemp", cuadros);
        if (cuadros[i] === null) {
            cuadros[i] = jugador;
            setCuadros(cuadros);
            setJugador(jugador === "X" ? "O" : "X");
            setHistorial(nuevoMovimiento.concat([{ cuadros }]));
            setNroMovimiento(nuevoMovimiento.length);
        }
        if (calcularGanador(cuadros) !== null) {
            setGanador(calcularGanador(cuadros));
        }
    }
    /*const saltarA = (movimiento) => {
        console.log("movimiento", movimiento);
        setNroMovimiento(movimiento);
        setJugador(jugador === "X" ? "O" : "X");

    }*/
//en este const "saltarA se modifica Reinicio del juego al estado inicial 
// y Corrige el estado del turno del jugador al retroceder"
    const saltarA = (movimiento) => {
         // Reiniciar el juego al estado inicial
        if (movimiento === 0) {
            setHistorial([{
                cuadros: Array(9).fill(null)
            }]);
            setCuadros(Array(9).fill(null));
            setGanador(null);
        } else {
            setHistorial(historial.slice(0, movimiento + 1));
        }
        // basandonos en que si "X" es par y "O" es impar 
        console.log("movimiento", movimiento);
        setNroMovimiento(movimiento);
        setJugador((movimiento % 2) === 0 ? "X" : "O");
    }
    const movimientoActual = historial[nroMovimiento];
    return (
        <div className="juego">
            <div className="juego-tablero">
                <h2>{ganador ? `Ganador: ${ganador}` : `Próximo jugador: ${jugador}`}</h2>
                <TableroD cuadros={movimientoActual.cuadros} onClick={(i) => click(i)} />
            </div>
            <Historial historial={historial} saltarA={saltarA} />
        </div>
    );
}
export default Juego;

function calcularGanador(cuadros) {
    const lineas = [
        [0, 1, 2], // primera fila
        [3, 4, 5], // segunda fila
        [6, 7, 8], // tercera fila
        [0, 3, 6], // primera columna
        [1, 4, 7], // segunda columna
        [2, 5, 8], // tercera columna
        [0, 4, 8], // diagonal
        [2, 4, 6] // diagonal
    ];
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i];
        if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
            return cuadros[a];
        }
    }
    return null;
}