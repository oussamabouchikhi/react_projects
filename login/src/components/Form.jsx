import React from 'react';
import Input from './Input';

function Form(props) {
    return (
        <form className="form">
            <h1>{props.isRegistered ? "Login" : "Register"}</h1>
            <Input type='text' placeholder='Username' />
            <Input type='password' placeholder='Password' />
            {!props.isRegistered && (
                <Input type='password' placeholder='Confirm password' />
            )}
            <button type="submit">
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
    );
}

export default Form;