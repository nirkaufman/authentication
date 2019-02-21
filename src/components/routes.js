import React from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Burgers from "./pages/Burgers";
import Header from "./shared/Header";
import Pizza from "./pages/Pizza";
import {Redirect, Route, Switch} from "react-router-dom";

const routes = currentUser => {

  // pages that advisable without login
  if (!currentUser) {
    return (
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Redirect from="*" to="/Home"/>
          </Switch>
    );
  }

  // pages that required login
  return (
      <>
        <Header/>
        <Switch>
          <Route path="/burgers" exact component={Burgers}/>
          <Route path="/pizza" exact component={Pizza}/>
          <Redirect from="*" to="/burgers"/>
        </Switch>
      </>
  );
};


export default routes;
