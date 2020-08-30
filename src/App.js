import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import Login from "./component/login";
import Registeruser from "./component/userRegister";
import Homepage from "./component/homepage";
import userview from "./component/UserView";
import oneproductview from "./component/productView";
import AddProduct from "./component/addProduct";


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/"  exact component={Login}/>
        <Route path="/registeruser" component={Registeruser}/>
        <Route path="/homepage"  component={Homepage}/>
        <Route path="/userprofile" component={userview}/>
        <Route path="/productview" component={oneproductview}/>
        <Route path="/addprod" component={AddProduct}/>
      </Switch>
       
    </Router>
    
  );
}

export default App;
