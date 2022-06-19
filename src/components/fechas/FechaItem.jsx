import React from 'react';
import './fechas.css'

const icons = ["🥳","🎉","🪅","🎆","🎈"];

const FechaItem = (props) => {
    // random icon
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    if(props.isFechaOcupada){
        return (
            <div className='container py-2 text-center event__container event__container--special my-2'>
                <h1 className='main__title my-0 event__title event__title--special'>Compromiso personal ✨</h1>
                <hr className='mt-0 mb-2'/>
                <h3 className='mb-0'>{props.formattedFecha} - {props.turno}</h3>
            </div>
        );
    }
    return (
        <div className='container py-2 text-center event__container my-2'>
            <h1 className='main__title my-0 event__title'>{props.name} {randomIcon}</h1>
            <hr className='mt-0 mb-2'/>
            <h3 className='mb-0'>{props.formattedFecha} - {props.turno}</h3>
        </div>
    );
};

export default FechaItem;