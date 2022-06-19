import React from 'react';
import { Alert } from 'react-bootstrap';

const Info = () => {
    return (
        <div>
            <Alert severity="info"><b>Atencion:</b> A partir del 12/08 inclusive, el DJ no tomará fechas los dias viernes (excepto bares)</Alert>
        </div>
    );
};

export default Info;