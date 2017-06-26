import React, {Component} from 'react';


export default class ProductInsert extends Component {

  render() {

    let insertProduct = () => {
      let name = this.refs.name.value.trim();
      let image = this.refs.image.value.trim();
      let price = this.refs.price.value;
      let saleprice = this.refs.saleprice.value;
      let description = this.refs.description.value.trim();


    let product = {
      name: name,
      image: image,
      price: price,
      saleprice: saleprice,
      description: description

    }

    Meteor.call("insertProduct", product, function(error, result){
      if(result === 'success'){
              console.warn("successful");

              this.refs.name.value ="";
              this.refs.image.value ="";
              this.refs.price.value ="";
              this.refs.saleprice.value ="";
              this.refs.description.value ="";
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
                <input ref="name" type="text" className="form-control" id="inputName" placeholder="Product Name" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputImage" className="col-sm-2 control-label">Image</label>
              <div className="col-sm-10">
                <input ref="image" type="text" className="form-control" id="inputImage" placeholder="Product Image"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPrice" className="col-sm-2 control-label">Price</label>
              <div className="col-sm-10">
                <input ref="price" type="number" className="form-control" id="inputPrice" placeholder="Product Price" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputSaleprice" className="col-sm-2 control-label">Sale Price</label>
              <div className="col-sm-10">
                <input ref="saleprice" type="number" className="form-control" id="inputSaleprice" placeholder="Product Sale Price" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputDescription" className="col-sm-2 control-label">Description</label>
              <div className="col-sm-10">
                <input ref="description" type="text" className="form-control" id="inputDescription" placeholder="Product Description" />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button onClick ={insertProduct} type="submit" className="btn btn-default">Submit</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
