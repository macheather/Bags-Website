import React, {Component} from 'react';
import Loading from '/imports/ui/components/Main/Loading.jsx';

export default class UpdateProduct extends Component {

  render() {

      if(this.props.loading) {
          return <Loading />
      }

      else {
          let {_id, name, image, price, saleprice, description} = this.props.product;
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

          Meteor.call("updateProduct", _id,  product, function(error, result){
            if(result === 'success'){
                    console.warn("successful");
            }
            else{
              console.warn("error");
              return;
            }
          });

        }

        return (
          <div>
            <input ref="name" type="text" defaultValue={name} placeholder="Enter Name"/><br/>
            <input ref="volume" type="text" defaultValue={image} placeholder="Enter Image"/><br/>
            <input ref="price" type="number" defaultValue={price} placeholder="Enter Price"/><br/>
            <input ref="saleprice" type="number" defaultValue={saleprice} placeholder="Enter Sale Price"/><br/>
            <input ref="description" type="text" defaultValue={description} placeholder="Enter Description"/><br/>
            <button onClick={submitProduct}>Submit</button>
          </div>
        )
    }
  }
}
