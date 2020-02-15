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
        {/* <NavLink to="/" exact activeClassName="class-nav-link"> */}
        <div className="logo">🐶 Kartanon Kirsut</div>
        {/* </NavLink> */}
        <div className="links">
          <NavLink to="/" exact activeClassName="class-nav-link navlinktop">
            <div className="home">
              <img
                src="/images/home.png"
                className="homeIcon"
                alt="home icon"
              />
            </div>
          </NavLink>
          <NavLink
            to="/about-us"
            exact
            activeClassName="class-nav-link navlinktop"
            onClick={this.handleLinkClick}
          >
            About us
          </NavLink>
          <NavLink
            to="/rates"
            exact
            activeClassName="class-nav-link navlinktop"
          >
            Prices
          </NavLink>{" "}
          <NavLink
            to="/booking"
            exact
            activeClassName="class-nav-link navlinktop"
          >
            Booking
          </NavLink>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav)
