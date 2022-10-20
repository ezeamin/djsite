import React from 'react';
import { Alert } from 'react-bootstrap';

const Info = () => {
    return (
        <div>
            <Alert severity="info"><b>Atencion:</b> El DJ no tomará fechas los dias viernes (excepto bares) hasta el 11/11 inclusive</Alert>
        </div>
    );
};

export default Info;