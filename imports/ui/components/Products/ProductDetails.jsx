import React, {Component} from 'react';
import accounting from 'accounting';
import {Link} from 'react-router';

export default class ProductDetails extends Component {

  render () {
    let product = this.props.product;
    let reviews = product.review;
    return (

        <div className="row">
          <div className="col-sm-6">
            <div className="text-center">
              <img height="400px" width="400px" src={product.image}></img>
            </div>
          <p>
          {product.description ? <p className="lead">
          <strong>Description: </strong>
          {product.description}
          </p> : <p> no description available</p> }
          </p>
          </div>
          <div className="col-sm-6">
            <p>
              <h2 className="text-center">{product.name}</h2>
              <h2 className="text-center">{accounting.formatMoney(product.saleprice)}</h2>
            </p>
            <h2 className="text-center"><button className="btn btn-warning">Add To Cart</button></h2>
            <div className="text-center">
            <Link to="/">
              <button className="btn btn-default"> <i className="glyphicon glyphicon-arrow-left"> Back </i></button>
            </Link>
            <div className="col-sm-8">
            <p className="lala">
              <strong>Review: </strong>
              <img height="35px" width="35px" src="/images/heartbag.png" />
              <img height="35px" width="35px" src="/images/heartbag.png" />
              <img height="35px" width="35px" src="/images/heartbag.png" />

            </p>
            </div>
          </div>
          </div>
        </div>

    )
  }
}
