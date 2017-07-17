import React, {Component} from 'react';
import Rating from '/imports/ui/components/Rating.jsx';
export default class DisplayReivew extends Component {

  render() {
    let reviews = this.props.reviews;
    let allReviews = null;
    let getDate = (date) => {
      return date.getMonth()+1+"/"+date.getDate()+", "+date.getFullYear();
    }
    // let dateString = review.date.getMonth()+1+"/"+review.date.getDate()+", "+review.date.getFullYear();
    //console.log('DisplayReivew', product);
    if(reviews!=null){
      allReviews = reviews.map(function(review, i){

      // console.log('dateString', dateString);
        return <div key={i} className="display-review">
                <div className="row">
                  <Rating rating={review.rating} />
                  {review.verified? <span>Verified</span> : <span>Not verified</span>}
                </div>
                <div className="row">
                  <span >By: </span><span className="username" >{review.name}</span>
                  <span>On </span><span>{getDate(review.date)}</span>
                </div>
                <div key={i} className="row">
                    <span  key={i}>{review.review} </span>
                </div>
              </div>;
      });
    }
    return (
      <div>
        <ul>
          {allReviews}
        </ul>
      </div>
    )
  }
}
