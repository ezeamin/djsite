import React from 'react';
import BackButton from '../../backButton/BackButton';
import Title from '../../title/Title';
import FormNuevoEvento from './formNuevoEvento/FormNuevoEvento';

const PanelNewEvento = (props) => {
    const title = props.edit ? 'Editar evento' : 'Nuevo evento';
    return (
        <div className='container my-2'>
            <BackButton className="mb-2"/>
            <Title text={title}/>
            <FormNuevoEvento />
        </div>
    );
};

export default PanelNewEvento;