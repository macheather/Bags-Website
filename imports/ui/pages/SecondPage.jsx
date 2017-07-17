import React, {Component} from 'react';
import {Link} from 'react-router';
import Review from '/imports/ui/components/Review.jsx';

export default class SecondPage extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img src="http://content.purseblog.com/images/2015/07/Kate-Spade-Blue-Mini-Nora-Bag.jpg"></img>
            <h2 className="text-center">Blue Avenue</h2>
            <p className="lead">
              <strong>Description: </strong>
              Powerful Blue
            </p>
            <h2 className="text-center">$100 </h2>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}
