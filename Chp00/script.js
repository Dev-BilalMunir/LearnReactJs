// import React from 'react';
// import ReactDOM from 'react-dom/client';
const message = "Hello i am learing react with fun"
const p1 = React.createElement('p', {style:{color:'blue'}}, message) 

const h1 = React.createElement('h1', { style: { color: 'red' } }, 'Hello React');

const container = React.createElement('div', {style:{margin:'10px', padding:'20px'}}, [h1, p1])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
