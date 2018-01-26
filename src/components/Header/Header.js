import React, { Component } from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./Header.css";

export default class Header extends Component {
  render() {
    return <div className="row">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Mehyar</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem href="/" >Home</NavItem>
            <NavItem href="/portfolio" >Portfolio</NavItem>
            <NavItem href="/about" >About</NavItem>
            <NavItem href="/contact" >Contact</NavItem>
          </Nav>
        </Navbar>
      </div>;
  }
}
