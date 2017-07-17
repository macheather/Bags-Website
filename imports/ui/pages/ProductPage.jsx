import React, {Component} from 'react';
import { Link } from 'react-router';
import ProductDetails from '/imports/ui/components/Products/ProductDetails.jsx';
import Review from '/imports/ui/components/Review.jsx';

export default class ProductPage extends Component {

  render() {
    if (this.props.loading){
      return <div>loading...</div>;
    } else{
      let product = this.props.product;
        return (
          <div>
              <div className="container">
                <ProductDetails product={product}/>
                <Review product={product} />
              </div>
        </div>
    )
  }
}
}
