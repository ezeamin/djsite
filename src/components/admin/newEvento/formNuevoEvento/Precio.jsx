import React from 'react';
import BasicInput from './BasicInput';

const Precio = (props) => {
    return (
        <div>
            <BasicInput label="Presupuestado" type="number" placeholder="$ xxx"  value={props.price} setValue={props.setPrice} />
            <BasicInput label="Pagado" type="number" placeholder="$ xxx"  value={props.paid} setValue={props.setPaid} />
        </div>
    );
};

export default Precio;