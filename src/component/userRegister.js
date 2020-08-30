import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class UserRegister extends Component{

    

    constructor(props){
        super();
        this.state = this.initialState;

    }

    initialState = {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: ''
    }


    changeuser = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onclickSubmit = (event) => {
        event.preventDefault();

        const user = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address

        };

        axios.post("http://localhost:3002/user/adduser", user)
    .then(response => {
        if(response.data != null){
            this.setState(this.initialState);
            alert("User Saved");
        }
    })
    }

   
    componentWillUpdate(nextProps, nextState){
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render(){
        return(
            <div  className=" container col-sm-4 mx-auto mt-5">
                <form onSubmit={this.onclickSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="first_name" value={this.state.first_name} onChange={this.changeuser}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="last_name" value={this.state.last_name} onChange={this.changeuser}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.changeuser}/>
                </div>

                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="Enter Phone" name="phone" value={this.state.phone}  onChange={this.changeuser}/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <textarea  type="text" className="form-control" placeholder="Enter Address" name="address" value={this.state.address} onChange={this.changeuser}/>
                </div>

                <button type="submit" className="btn btn-success btn-block">Sign Up</button>
                <Link to="/">
                <button type="button" className="btn btn-primary btn-block mt-3">Login</button>
                </Link>
                
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
        )
    }
}