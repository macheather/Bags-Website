import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';

Meteor.methods({
  addReview: function(id, product){
    console.log('id',id);
    console.log('product', product);
    // let productUpdate = Products.update({_id: id}, {$set: product});
    let addReview = Products.update({_id:id}, {$set:product});
    if(addReview) {
         return "success";
     } else {
         return "error";
     }
  },
});
