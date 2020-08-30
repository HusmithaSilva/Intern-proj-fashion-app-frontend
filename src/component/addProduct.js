import React, {Component} from 'react';
import axios from 'axios';

export default class Addproduct extends Component{

constructor(props){
    super(props);
    this.state = this.initialState;
}

initialState = {
    name: '',
    description: '',
    quantity: ''
}

changeProduct = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

clickSubmit = (event) => {
    event.preventDefault();

    const product = {
        name: this.state.name,
        description: this.state.description,
        quantity: this.state.quantity
    };

    axios.post("http://localhost:3002/product/addproduct", product)
    .then(response => {
        if(response.data != null){
            this.setState(this.initialState);
            alert("Product Saved");
        }
    })
}


    render(){
        return(
            <div  className="col-sm-4 mx-auto mt-5">
                <form onSubmit={this.clickSubmit}>
                <h3>Add Product</h3>

                <div className="form-group">
                    <label>Product name</label>
                    <input type="text" className="form-control" placeholder="Enter product name" name="name" value={this.state.name} onChange={this.changeProduct}/>
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea type="text" className="form-control" placeholder="Enter Description" name="description" value={this.state.description} onChange={this.changeProduct}/>
                </div>

                <div className="form-group">
                    <label>Quantity</label>
                    <input type="number" className="form-control" placeholder="Enter quantity" name="quantity" value={this.state.quantity} onChange={this.changeProduct}/>
                </div>

                                        
                <button type="submit" className="btn btn-primary btn-block">Submit Product</button>
                
            </form>
            </div>
        )
    }
}