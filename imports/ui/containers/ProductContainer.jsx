import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProductPage from '/imports/ui/pages/ProductPage.jsx';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {
  const id = props.params.id;
  //console.log('props ', props);
  //console.log('id', id);
  const oneproductSub = Meteor.subscribe('one_product', id);
  let selector = {_id: id};

  const product = Products.findOne(selector);
  return {
    product: product,
    loading: !oneproductSub.ready()
  };

}, ProductPage);
