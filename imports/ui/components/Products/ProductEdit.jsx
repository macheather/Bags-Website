import React, {Component} from 'react';


export default class ProductEdit extends Component {

  render() {
    let product = this.props.product;

    //let  updateProduct = function()
    //function updateProduct()

    let updateProduct = () => {
      let name = this.refs.name.value.trim();
      let image = this.refs.image.value.trim();
      let price = this.refs.price.value.trim();
      let saleprice = this.refs.saleprice.value.trim();
      let description = this.refs.description.value.trim();


    let updateProduct = {
      name: name,
      image: image,
      price: price,
      saleprice: saleprice,
      description: description
    }

    Meteor.call("updateProduct", product._id,  updateProduct, function(error, result){
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
        <div className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputName" className="col-sm-2 control-label">Name</label>
              <div className="col-sm-10">
                <input ref="name" type="text" className="form-control" id="inputName" placeholder="Product Name" defaultValue={product.name}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputImage" className="col-sm-2 control-label">Image</label>
              <div className="col-sm-10">
                <input ref="image" type="text" className="form-control" id="inputImage" placeholder="Product Image" defaultValue={product.image}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPrice" className="col-sm-2 control-label">Price</label>
              <div className="col-sm-10">
                <input ref="price" type="number" className="form-control" id="inputPrice" placeholder="Product Price" defaultValue={product.price}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputSaleprice" className="col-sm-2 control-label">Sale Price</label>
              <div className="col-sm-10">
                <input ref="saleprice" type="number" className="form-control" id="inputSaleprice" placeholder="Product Sale Price" defaultValue={product.saleprice}/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription" className="col-sm-2 control-label">Description</label>
              <div className="col-sm-10">
                <input ref="description" type="text" className="form-control" id="inputDescription" placeholder="Product Description" defaultValue={product.description}/>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button onClick ={updateProduct} type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
