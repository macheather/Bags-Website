import React, {Component} from 'react';
import DisplayReivew from '/imports/ui/components/DisplayReview.jsx';
export default class Review extends Component {

  render() {
    let product = this.props.product;
    let rating = 0;
    //console.log('hi');

    let addReview = () => {
      // console.log("review",this.refs.review.value.trim());
      let message = this.refs.review.value.trim();
      let name = this.refs.user.value.trim();

      let newReview = {
        name: name,
        verified: false,
        rating: rating,
        review: message,
        date: new Date()
      }
      let addedReviewProduct = {
      }
      if(product.reviews == null){
        addedReviewProduct = {
          reviews: [newReview]
        }
      }
      else{
        var curReview = product.reviews;
        curReview.push(newReview);
        addedReviewProduct = {
          reviews: curReview
        }
      }

      Meteor.call("addReview", product._id, addedReviewProduct, function(error, result){
        if(result === 'success'){
                console.warn("successful");
        }
        else{
          console.warn("error");
          return;
        }
      });
    }

    let clearTitleText = () => {
      this.refs.title.value = "";
    }
    let clearReviewText = () => {
      this.refs.review.value = "";
    }

    let oneRating = () => {
      rating = 1;
    }
    let twoRating = () => {
      rating = 2;
    }
    let threeRating = () => {
      rating = 3;
    }
    let fourRating = () => {
      rating = 4;
    }
    let fiveRating = () => {
      rating = 5;
    }

    return (
      <div className="container">
        <div className="row">
          <h2 className="text-center">Reviews</h2>
          <div className="row rating">
            <span className="rating-text">Rating</span>
            <button ref="firstButton" onClick={oneRating} className="rating-btn"><img height="35px" width="35px" src="/images/heartbag.png" /></button>
            <button onClick={twoRating} className="rating-btn"><img height="35px" width="35px" src="/images/heartbag.png" /></button>
            <button onClick={threeRating} className="rating-btn"><img height="35px" width="35px" src="/images/heartbag.png" /></button>
            <button onClick={fourRating} className="rating-btn"><img height="35px" width="35px" src="/images/heartbag.png" /></button>
            <button onClick={fiveRating} className="rating-btn"><img height="35px" width="35px" src="/images/heartbag.png" /></button>
          </div>
          <div className="space">
          </div>
          <div className="row">
            <span className="username"></span>
            <label htmlFor="user" className="col-sm-1 control-label">Name</label>
            <div className="col-sm-3">
              <input  ref="user" type="text" className="form-control" id="user" placeholder="Your Name"/>
            </div>
          </div>
          <div className="form-group review-form">
            <textarea onClick={clearReviewText} ref="review" className="form-control" id="reviewText" rows="3" placeholder="How is the product?">
            </textarea>
            <button onClick={addReview} type="submit" className="btn btn-primary pull-right">Submit</button>
          </div>
          <DisplayReivew reviews={product.reviews}/>
        </div>
      </div>
    )
  }
}
