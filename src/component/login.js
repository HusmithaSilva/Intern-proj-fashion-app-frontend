import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class login extends Component{

    userdata;

    constructor(props){
        super(props);
        this.state={
            user:[]

        }

    }

    componentDidMount(){
        this.userdata = JSON.parse(localStorage.getItem('user'));
    }

    chng = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    logged = (event) => {   
        event.preventDefault();

        const loggin = {
            email : this.state.email,
            password: this.state.password
        }
        axios.post("http://localhost:3002/user/login", loggin)
    .then(response => {
        if(response.data != null){
            
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response.data))
            this.setState({
                email: '',
                password: ''
            })
            
            window.location.replace("http://localhost:3000/homepage");
        }
    })
    }
    render(){
        return(
            
            <div className="container mx-auto col-sm-4 mt-5">
                <form className="mx-auto">  
                <h3> Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.chng}/>
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="password" className="form-control" placeholder="Enter Phone Number" name="password" value={this.state.phone} onChange={this.chng}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <Link to="/homepage">
                    
                    <button type="submit" className="btn btn-success btn-block" onClick={this.logged}>Login</button>
                </Link>
                
                <Link to="/registeruser">
                <button type="button" className="btn btn-primary btn-block mt-3">Register</button>
                </Link>
                
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            
        )
    }
}