import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./custom.css";
import Home from "./components/Home";
import Register from "./components/Register";
import Oficinas from "./components/Oficinas";
import Login from "./components/Login";
import OficinasView from "./components/OficinasView";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/oficinas" component={Oficinas} />
            <Route path="/oficinas-visualizacao" component={OficinasView} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}
