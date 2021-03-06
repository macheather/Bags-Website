import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Name extends Component {

  render() {
    let product = this.props.product;

    return (
      <div className="col-sm-4">
        <Link to={'/product/' + product._id}>
        <img className="" height="300px" width="300px" src= {product.image} />
          <h2 className="text-center">{product.name}</h2>
        </Link>
        <div className="text-center">
          <h2 ><strike>${product.price}</strike> <span className="text-danger">{product.saleprice}</span></h2>
        </div>
      </div>

    )
  }
}
