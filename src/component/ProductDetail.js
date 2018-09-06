import React, { Component } from 'react';
import '../App.css';

function ProductDetail(props) {
    let stars = [];
    for(let i =0; i < props.props.rating; ++i) {
        stars.push(<span className="glyphicon glyphicon-star"></span>)
    }

    return(
        <div className="col-sm-4 col-lg-4 col-md-4">
                        <div className="thumbnail">
                            <img src="https://picsum.photos/320/150" alt=""/>
                            <div className="caption">
                                <h4 className="pull-right">{props.props.price}</h4>
                                <h4><a href="#">{props.props.name}</a>
                                </h4>
                                <p>{props.props.description}</p>
                            </div>
                            <div className="ratings">
                                <p className="pull-right">{props.props.reviews}</p>
                                <p>
                                    {stars}
                                </p>
                                <hr/>
                            </div>
                            <div>
                                <button onClick={props.phone}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
    )

}

export default ProductDetail;