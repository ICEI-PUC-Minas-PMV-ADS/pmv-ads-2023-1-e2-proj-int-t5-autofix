import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import LogoAutoFix from "../assets/logo.svg";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  register() {
    window.location.href = "/register";
  }
  login() {
    window.location.href = "/login";
  }

  render() {
    return (
      <header>
        <Navbar
          className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
          container
          light
        >
          <img width="69" alt="logo" src={LogoAutoFix} />
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/">
                Página Inicial
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} className="text-dark" to="/oficinas">
                Oficinas
              </NavLink>
            </NavItem>
          </ul>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse
            className="d-sm-inline-flex flex-sm-row-reverse"
            isOpen={!this.state.collapsed}
            navbar
          >
            <button onClick={this.login} className="a-entrar">
              Entrar
            </button>
            <button onClick={this.register} className="a-cadastro">
              Cadastrar
            </button>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
