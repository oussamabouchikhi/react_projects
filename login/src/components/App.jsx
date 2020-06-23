import React from 'react';
import Form from './Form';

let userIsRegistered = true;

function App() {
    return (
        <div className="container">
            <Form isRegistered={userIsRegistered} />
        </div>
    );
}

export default App;