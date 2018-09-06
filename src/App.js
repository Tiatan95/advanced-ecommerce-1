import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from './component/Carousel';
import Header from './component/Header';
import ProductDetail from './component/ProductDetail'
import Footer from './component/Footer'

function App(props) {
    let products = [];
    for(let i = 0; i < props.props.length; ++i){
        products.push(<ProductDetail props={props.props[i]} phone={props.func}></ProductDetail>)
    }

    return (
    <div className="App">
    <Header num={props.num}></Header>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <p className="lead">Shop Name</p>
                <div className="list-group">
                    <a href="#" className="list-group-item">Category 1</a>
                    <a href="#" className="list-group-item">Category 2</a>
                    <a href="#" className="list-group-item">Category 3</a>
                </div>
            </div>

            <div className="col-md-9">
                <Carousel> </Carousel>
                <div className="row">
                    {products}
                    
{/*
                    <div className="col-sm-4 col-lg-4 col-md-4">
                        <h4><a href="#">Like this template?</a>
                        </h4>
                        <p>If you like this template, then check out <a target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">this tutorial</a> on how to build a working review system for your online store!</p>
                        <a className="btn btn-primary" target="_blank" href="http://maxoffsky.com/code-blog/laravel-shop-tutorial-1-building-a-review-system/">View Tutorial</a>
                    </div>
*/}
                </div>

            </div>

        </div>

    </div>
   
    <div className="container">
        <hr/>
        <Footer></Footer>
    </div>
      </div>
    );
}

export default App;
