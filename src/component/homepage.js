import React, {Component} from 'react';
import {Link} from 'react-router-dom';
const axios = require('axios');




export default class homepage extends Component{

    constructor(props){
        super(props);

        this.state = {
            products: []
        }
    }

    setProduct = (product) => {
        localStorage.setItem("product", JSON.stringify(product));
    }
    componentDidMount(){
        axios.get("http://localhost:3002/product/findAllProduct")
        .then(Response => Response.data)
        .then((data => {
            this.setState({products: data})
        }))
    }

    deleteitem = (productID) => {
        axios.delete("http://localhost:3002/product/deleteProduct/" + productID)
            .then(response => {
                alert("product deleted", productID)
                console.log('product id', productID)

                this.setState({
                    products: this.state.products.filter(products => products._id !== productID)
                })
            })
    };
    render(){
        return(
        <div>
            <div className="jumbotron jumbotron-fluid bg-dark text-white">
                <div className="container">
                    <h1 className="display-4">Products available</h1>
                    <p className="lead">Here displayed the available product of the store.</p>
                </div>
            </div>
        
<div className="container">

    <Link to="/addprod">
    <button className="btn btn-primary float-none">Add products</button>
    </Link>
    
    <Link to="/userprofile">
        <button className="btn btn-primary float-none ml-4">View User</button>
    </Link>
   

{/* <!-- Page Heading --> */}
    <h1 className="my-4">Product Page
    <small>Products</small>
    </h1>
        {
        
            this.state.products.map((products) => 

            <div className="row mt-2">
                <div className="col-md-7">
                <a href="#">
                <img className="img-fluid rounded mb-3 mb-md-0" src="http://placehold.it/700x300" alt=""/>
                 </a>
                </div>
                <div className="col-md-5">
                <h3>{products.name}</h3>
                <p>{products.description}</p>
                <p>{products.quantity}</p>
                <Link to="/productview">
                <button className="btn btn-primary" onClick={this.setProduct.bind(this, products)}>View Product</button>
                </Link>
                
                <a type="button" className="btn btn-danger" onClick={this.deleteitem.bind(this, products._id)}>Delete</a>
               
                </div>
                
            </div>

            )

        }

<hr/>

    </div>

            <div className="jumbotron jumbotron-fluid bg-dark text-white">
                <div className="container">
                    <h1 className="display-4">Products available</h1>
                    <p className="lead">Here displayed the available product of the store.</p>
                </div>
            </div>

    </div>
        )
    }
}