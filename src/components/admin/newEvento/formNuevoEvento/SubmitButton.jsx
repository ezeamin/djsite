import React from 'react';

const SubmitButton = (props) => {
    return (
        <input
            className="mt-3 mb-2 form__button form__button__submit"
            type="button"
            value="Calcular"
            onClick={props.handleSubmit}
          />
    );
};

export default SubmitButton;