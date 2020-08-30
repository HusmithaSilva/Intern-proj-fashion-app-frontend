import React, {Component} from 'react';
const axios = require('axios');

export default class userview extends Component{

  userdetails;

  constructor(props){
    super(props);
    this.state={
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      user: []
    }

  }


  componentDidMount(id){

    axios.get("http://localhost:3002/product/findAllProduct/" +id)
        .then(Response => Response.data)
        .then((data => {
          console.log(id);
            this.setState({user: data})
        }))

    this.userdetails = JSON.parse(localStorage.getItem('user'));

    if(localStorage.getItem('user')){
      this.setState({
        first_name: this.userdetails.first_name,
        last_name: this.userdetails.last_name,
        email: this.userdetails.email,
        phone: this.userdetails.phone,
        address: this.userdetails.address,
      })
    }

  }


  deleteitem = (usrID) => {
    console.log(this.state.email);
    var email = this.state.email;
    axios.delete("http://localhost:3002/user/deleteUser/" + email)
        .then(response => {
            alert("User deleted", email)
            console.log('product id', email)

            this.setState({
              
              first_name: '',
              last_name: '',
              email: '',
              phone: '',
              address: ''
                                
            })

            this.logout();
        })
};

changed = (event) =>{
  this.setState({
      [event.target.name]: event.target.value
  })
}

  update = (event) => {

    event.preventDefault();
    
    const user = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address

  };



    axios.patch("http://localhost:3002/user/editusr/", user)
    .then(response => {
        alert("User uupdated!");
    })
  }

logout = () => {
  localStorage.clear();
  this.props.history.push("/");
}


    render(){
        return(
            
<div class="container" style={{paddingTop: "60px"}}>
  <h1 class="page-header">Edit Profile</h1>
  <div class="row">
     {/* left column  */}
    <div className="col-md-4 col-sm-6 col-xs-12">
      <div className="text-center">
        <img src="http://lorempixel.com/200/200/people/9/" class="avatar img-circle img-thumbnail" alt="avatar"/>
        <h6>Upload a different photo...</h6>
        <input type="file" class="text-center center-block well well-sm"/>
      </div>
    </div>
    
    {/* edit form column  */}
    <div class="col-md-8 col-sm-6 col-xs-12 personal-info">
      
      
      <h3>Personal info</h3>
      <form class="form-horizontal" role="form">
        <div class="form-group">
          <label class="col-lg-3 control-label">First name:</label>
          <div class="col-lg-8">
            <input className="form-control" name = "first_name" value={this.state.first_name} type="text" onChange={this.changed}/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-lg-3 control-label">Last name:</label>
          <div class="col-lg-8">
            <input className="form-control" name = "last_name" value={this.state.last_name} type="text" onChange={this.changed}/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-lg-3 control-label">Email:</label>
          <div class="col-lg-8">
            <input className="form-control" value={this.state.email} type="text"/>
          </div>
        </div>
        
        <div class="form-group">
          <label class="col-md-3 control-label">Phone</label>
          <div class="col-md-8">
            <input className="form-control"  value={this.state.phone} type="text"/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label">Address</label>
          <div class="col-md-8">
            <input className="form-control" name = "address" value={this.state.address} type="text" onChange={this.changed}/>
          </div>
        </div>
        <div class="form-group">
          <label class="col-md-3 control-label"></label>
          <div class="col-md-8">
            <input className="btn btn-primary" value="Save Changes" type="button" onClick={this.update}/>
            <span></span>
            <input class="btn btn-danger ml-3" value="Delete" type="button" onClick={this.deleteitem.bind(this)}/>
            <input className="btn btn-success ml-3" value="Logout" type="button" onClick={this.logout}/>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>

        )
    }
}