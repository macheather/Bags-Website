import React, {Component} from 'react';
import accounting from 'accounting';

export default class ProductDetails extends Component {

  render () {
    let product = this.props.product;
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img height="400px" width="400px" src={product.image}></img>
            <h2 className="text-center">{product.name}</h2>
            {product.description ? <p className="lead">
              <strong>Description: </strong>
              {product.description}
            </p> : <p> no description available</p> }
            <h2 className="text-center">{accounting.formatMoney(product.saleprice)}</h2>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}
