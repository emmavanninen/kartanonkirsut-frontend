import React, { Component } from "react"
import { NavLink, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"

import "./Nav.css"

class Nav extends Component {
  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            About us
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">
              <NavLink to="/about-us" exact activeClassName="class-nav-link">
                About us
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2">
              <NavLink to="/rates" exact activeClassName="class-nav-link">
                Prices
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3">
              {" "}
              <NavLink to="/booking" exact activeClassName="class-nav-link">
                Booking
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}

export default withRouter(Nav)
