import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// function Greeter(props: any) {
function Greeter(
  {first, last}: {
    first: string, 
    last: string
  }
) {
  // const {first, last} = props;
  return (
    <h1>
      Hello, {first} {last}
    </h1>
  );
}

root.render(
  <Greeter first="Nathan" last="Tsang"/>
);

const element = <Greeter first="Nate" last="" />;
