import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';
let products = state.products;

function phone(){
  state.numberOfItemsInCart++;
  ReactDOM.render(
    <App props = {products} num={state.numberOfItemsInCart} func ={phone}/>,
    document.getElementById('root')
  );  
}

ReactDOM.render(
  <App props = {products} num={state.numberOfItemsInCart} func ={phone}/>,
  document.getElementById('root')
);
