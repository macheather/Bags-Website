import React, {Component} from 'react';

export default class AddProduct extends Component {

  render() {

    const submitProduct = () => {
      let name = this.refs.name.value.trim();
      let image = this.refs.image.value.trim();
      let price = this.refs.price.value.trim();
      let saleprice = this.refs.saleprice.value.trim();
      let description = this.refs.description.value.trim();

      console.log('name', name);
      console.log('image', image);
      console.log('price', price);
      console.log('saleprice', saleprice);
      console.log('description', description);

      let product = {
        name: name,
        image: image,
        price: price,
        saleprice: saleprice,
        description: description
      }

      Meteor.call("addProduct", product, function(error, result){
        if(result === 'success'){
                console.warn("successful");
        }
        else{
          console.warn("error");
          return;
        }
      });

      this.refs.name.value = "";
      this.refs.image.value = "";
      this.refs.price.value = "";
      this.refs.saleprice.value = "";
      this.refs.description.value = "";

    }

    return (
      <div>
        <input ref="name" type="text" placeholder="Enter Name"/><br/>
        <input ref="image" type="text" placeholder="Enter Image"/><br/>
        <input ref="price" type="number" placeholder="Enter Price"/><br/>
        <input ref="saleprice" type="number" placeholder="Enter Sale Price"/><br/>
        <input ref="description" type="text" placeholder="Enter Description"/><br/>
        <button onClick={submitProduct}>Submit</button>
      </div>
    )
  }
}
