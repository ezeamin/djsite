import React from 'react';
import BasicInput from './BasicInput';

const Cliente = (props) => {
    return (
        <div>
            <BasicInput label="Nombre del cliente" placeholder="Nombre"  value={props.name} setValue={props.setName} />
            <BasicInput label="Telefono" type="number" placeholder="381*******"  value={props.phone} setValue={props.setPhone} />
        </div>
    );
};

export default Cliente;