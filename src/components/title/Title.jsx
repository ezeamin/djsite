import React from 'react';
import './title.css'

const Title = (props) => {
    return (
        <div>
            <h1 className='main__title title'>{props.text}</h1>
            <hr className='title__hr'/>
        </div>
    );
};

export default Title;