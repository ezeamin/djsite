import React from 'react';

const Horarios = (props) => {
    return (
        <div className='d-flex mt-2 align-items-center justify-content-between'>
            <input
                className='form__input me-0'
                type="time"
                placeholder='Desde'
                value={props.start}
                onChange={(e) => props.setStart(e.target.value)}
            ></input>
            <p className='mb-0 text-light fw-bold mx-2'>-</p>
            <input
                className='form__input me-0'
                type="time"
                placeholder='Hasta'
                value={props.end}
                onChange={(e) => props.setEnd(e.target.value)}
            ></input>
        </div>
    );
};

export default Horarios;