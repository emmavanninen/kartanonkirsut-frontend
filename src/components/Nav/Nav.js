import React, { Component } from "react"
import { NavLink, withRouter } from "react-router-dom"
// import "bootstrap/dist/css/bootstrap.min.css"
// import Dropdown from "react-bootstrap/Dropdown"

import "./Nav.css"

class Nav extends Component {
  handleLinkClick = () => {
    console.log("poop")
  }

  render() {
    return (
      <div className="nav">
        <div className="logo">🐶 Kartanon Kirsut</div>
        <div className='links'>
          <NavLink
            to="/about-us"
            exact
            activeClassName="class-nav-link"
            onClick={this.handleLinkClick}
          >
            About us
          </NavLink>
          <NavLink to="/rates" exact activeClassName="class-nav-link">
            Prices
          </NavLink>{" "}
          <NavLink to="/booking" exact activeClassName="class-nav-link">
            Booking
          </NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav)
