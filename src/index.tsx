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
  </React.StrictMode>
);

// function FruitListItem(props: { fruit: { id: number; name: any; }; }) {
//   function handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>, id: number) {
//     console.log(e);
//     console.log(`removed ${id}`);
//   }

//   return (
//     <li onClick={(e) => handleClick(e, props.fruit.id)}>
//       {props.fruit.name}{' '}
//     </li>
//   );
// }

// function FruitList(props: { fruits: any[]; }) {
//   const fruitListItems = props.fruits.map((fruit: { id: any; name: any }) => (
//     <FruitListItem key={fruit.id} fruit={fruit} />
//   ));
//   return <ul>{fruitListItems}</ul>;
// }

// const data = [
//   { id: 1, name: 'apple' },
//   { id: 2, name: 'orange' },
//   { id: 3, name: 'blueberry' },
//   { id: 4, name: 'banana' },
//   { id: 5, name: 'kiwi' },
// ];

// root.render(
//   <FruitList fruits={data} />
// );

class Button extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('clicked');
  }

  render() {
    return <button onClick={this.handleClick}>Click Me!</button>;
  }
}
root.render(<Button />);