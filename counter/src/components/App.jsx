import React from 'react';

function App() {
    let count = 0;

    function increase() {
    count++;
    console.log(`Count= ${count}`);
    
        
    }
    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default App;