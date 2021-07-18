import React from 'react';
import './Button.scss';

function Button({ type, disabled, onClick, children }) {

    return (
        <button type={type} disabled={disabled} onClick={onClick} className="button-primary">
            {children}
        </button>
    )
}

export default Button;
