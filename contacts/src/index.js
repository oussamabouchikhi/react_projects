import React from 'react';
import ReactDOM from 'react-dom';

function Card() {
  return (
    <div>
      <h2>Beyonce</h2>
      <img
        src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        alt="avatar"
      />
      <p>+123 456 789</p>
      <p>b@beyonce.com</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card />
    <Card />
    <Card />
  </div>,
  document.getElementById('root')
);
