import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Products} from '/imports/api/products/products.js';

let data = [{
  name: 'Blue Avenue',
  image: 'http://content.purseblog.com/images/2015/07/Kate-Spade-Blue-Mini-Nora-Bag.jpg',
  price: 250,
  saleprice: '$100',
  description: 'Cute for a date'
},
{
  name: 'Extravagent',
  image: 'http://fashioncheer.com/wp-content/uploads/2012/09/Louis-Vuitton-Bags-2012-Trends.jpg',
  price: 1500,
  saleprice: '$1000',
  description: 'All your friends will think you are rich'
},
{
  name: 'Sandy Beach',
  image: 'https://s-media-cache-ak0.pinimg.com/736x/c3/bc/5d/c3bc5d718d6df5f50cd1b1659e7a16c9.jpg',
  price: 300,
  saleprice: '$250',
  description: 'Beach Time'
},
{
  name: 'White Chocolate',
  image: 'https://cdnb.lystit.com/photos/144c-2015/05/04/tory-burch-new-ivory-york-small-saffiano-tote-bag-white-product-0-391334087-normal.jpeg',
  price: 600,
  saleprice: '$550',
  description: 'Matches your outfit'
},
{
  name: 'Old Fashion',
  image: 'http://aksessuary.net/wp-content/uploads/2014/02/GUCCI-PURSES-photo-2.jpg',
  price: 2000,
  saleprice: '$1500',
  description: 'Old but Gold'
},
{
  name: 'Luxury',
  image: 'http://content.purseblog.com/images/2014/04/Prada-Saffiano-Cuir-Double-Bag-Black.jpg',
  price: 3000,
  saleprice: '$2000',
  description: 'Got that Money'
},
{
  name: 'Temptation',
  image: 'http://tenbags.com/images/handbag/dior-handbags.jpg',
  price: 2500,
  saleprice: '$1850',
  description: 'Daring'
},
{
  name: 'Wonderland',
  image: 'http://openchoy.info/wp-content/uploads/2016/06/85b79053276c14c70c0a3e5967fe1b6c.jpg',
  price: 500,
  saleprice: '$300',
  description: 'Alice in Wonderland'
},
{
  name: 'Caramel Paradise',
  image: 'http://www.nmionline.net/css/images/replica-celine-medium-edge-bags.jpg',
  price: 1000,
  saleprice: '$500',
  description: 'Forever young'
}
];

console.log('inserting data');

let checkProducts = Products.find({}).count();

for(i = 0; i < data.length; i++){
  let selector = {name: data[i].name};
Products.upsert(selector, {$set: data[i]});
}
