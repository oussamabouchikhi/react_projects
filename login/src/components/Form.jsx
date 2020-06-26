import React, {useState} from 'react';
import Input from './Input';

function Form(props) {
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
    
        setContact(prevValue => {
          if (name === "fName") {
            return {
              fName: value,
              lName: prevValue.lName,
              email: prevValue.email
            };
          } else if (name === "lName") {
            return {
              fName: prevValue.fName,
              lName: value,
              email: prevValue.email
            };
          } else if (name === "email") {
            return {
              fName: prevValue.fName,
              lName: prevValue.lName,
              email: value
            };
          }
        });
      }

    return (
        <form className="form">
            <h1>{props.isRegistered ? "Login" : "Register"}</h1>
            <h2>Hello {contact.fName} {contact.lName}</h2>
            <p>{contact.email}</p>
            <Input onChange={handleChange} name="fName" type='text' placeholder='First name' />
            <Input onChange={handleChange} name="lName" type='text' placeholder='Last name' />
            <Input onChange={handleChange} name="email" type='email' placeholder='Email' />
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