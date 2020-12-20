import React from 'react';
import ReactDOM from 'react-dom';
import difference from 'lodash'
import "./sample.css"
const Index = () => {
  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // { a: 3, b: 4 }
  [5, 6].map((n) => console.log(n));
  console.log(difference([2, 1], [2, 3]));
  return <div>Hello React!</div>;
};
ReactDOM.render(<Index />, document.getElementById('index'));
