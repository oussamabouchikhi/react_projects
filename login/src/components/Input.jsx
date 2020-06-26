import React from 'react';

function Input(props) {
    return (
        <input
            onChange={props.onChange}
            name={props.name} 
            type={props.type} 
            placeholder={props.placeholder}
            value={props.value} 
        />
    );
}

export default Input;