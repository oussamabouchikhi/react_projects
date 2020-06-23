import React from 'react';
import Login from './Login';

let isLoggedin = true;

function App() {
    return (
        <div className="container">
            {isLoggedin ? <h1>Hello again</h1> : <Login />}
        </div>
    );
}

export default App;