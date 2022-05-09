import React from 'react';

const Price = (props) => {
    if(!props.price) {
        return <div className='presupuestar__price'>$ ...</div>;
    }

    return (
        <div className='presupuestar__price'>
            {props.estMen ? "< " : props.estMay ? "> " : null}$ {props.price}
        </div>
    );
};

export default Price;