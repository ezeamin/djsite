import React from 'react';

const Price = (props) => {
    return (
        <div className='presupuestar__price'>
            $ {props.price}
        </div>
    );
};

export default Price;