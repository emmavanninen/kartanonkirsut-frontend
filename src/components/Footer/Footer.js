import React, { Component } from "react"
import { NavLink, withRouter } from "react-router-dom"
import "./Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerIcon">
          <img src="/images/dog.png" alt="footericon" />
          <br />
          <br />
          <div className="copyright">
            Kartanon Kirsut - Koirahoitola | © 2020
          </div>
        </div>
        <div className="footerlists">
          <ul className="footerlistTitle">
            <h5>List of links 1</h5>
            <li>
              <NavLink to="/" exact activeClassName="class-nav-link footerlink">
                Link 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeClassName="class-nav-link footerlink">
                Link 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeClassName="class-nav-link footerlink">
                Link 3
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeClassName="class-nav-link footerlink">
                Link 4
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeClassName="class-nav-link footerlink">
                Link 5
              </NavLink>
            </li>
          </ul>
          <ul className="footerlist3">
            <h5>List of links 2</h5>
            <li>
              <NavLink to="/" exact activeClassName="class-nav-link footerlink">
                Link 1
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeClassName="class-nav-link footerlink">
                Link 2
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeClassName="class-nav-link footerlink">
                Link 3
              </NavLink>
            </li>
            <li>
              <NavLink to="/" exact activeClassName="class-nav-link footerlink">
                Link 4
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
