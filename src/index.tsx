import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import PropTypes from "prop-types";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Button />
  </React.StrictMode>
);

function handleClick() {
  console.log('clicked');
  return undefined;
}

function Button() {
  return <button onClick={handleClick}>Click Me!</button>;
}


function Greeter(props: any) {
// function Greeter(
//   {first, last}: {
//     first: string, 
//     last: string
//   }
// ) {
  // const {first, last} = props;

  // return (
  //   <h1>
  //     Hello, {props.name}!
  //   </h1>
  // );
}

// Greeter.propTypes = {
//  name: PropTypes.string.isRequired,
// };

// root.render(
//   <Greeter name="Nathan T"/>
// );




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();