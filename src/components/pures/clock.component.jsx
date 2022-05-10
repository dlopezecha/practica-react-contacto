// Librerias
import React, { useEffect, useState } from 'react';

//Archivos del proyecto
import '../../styles/clock.scss';

const ClockComponent = () => {

    const initialState = {
        // Se genera una fecha como estado inicial del componente
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };
    const [state, setState] = useState(initialState);
    let timerID;

    const tick = () => {
        setState((prevState) => {
            let edad = prevState.edad + 1;
            return {
                ...prevState,
                fecha: new Date(),
                edad
            }
        });
    };

    //componentDidMount
    useEffect(() => {
        timerID = setInterval(
            () => tick(), 1000
        );
    }, []);

    //componentWillUnmount
    useEffect(() => {
        return () => {
            clearInterval(timerID);
        };
    }, []);

    return (
        <div>
            <h2>
                Hora Actual:
                {state.fecha.toLocaleTimeString()}
            </h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    );
};

export default ClockComponent;
