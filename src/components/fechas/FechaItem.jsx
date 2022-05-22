import React from 'react';

const FechaItem = (props) => {
    return (
        <div className='container py-2 text-center'>
            <h1 className='main__title my-0'>{props.name}</h1>
            <hr className='mt-0 mb-2'/>
            <h3>{props.formattedFecha} - {props.turno}</h3>
        </div>
    );
};

export default FechaItem;