import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import './Nav.css'

class Nav extends Component {
  handleLinkClick = () => {
    console.log('poop')
  }

  render() {
    return (
      <div className='nav'>
        <div className='logo'>🐶 Kartanon Kirsut</div>
        <div className='phoneMenu'>
          <img src='/images/dog.png' alt='menu icon' />
        </div>
        <div className='links'>
          <NavLink to='/' exact activeClassName='class-nav-link navlinktop'>
            <div className='home'>
              <img
                src='/images/home.png'
                className='homeIcon'
                alt='home icon'
              />
            </div>
          </NavLink>
            {/* <NavLink
            to="/about-us" exact activeClassName="class-nav-link navlinktop"
        onClick={this.handleLinkClick}> */}
        <AnchorLink href='#section1'>
            Info
          </AnchorLink>
          {/* </NavLink> */}
            {/* <NavLink
            to="/rates" exact activeClassName="class-nav-link navlinktop" > */}
            <AnchorLink href='#section2'>
            About us
          </AnchorLink>
          {/* </NavLink>{" "} */}
            {/* <NavLink
            to="/booking" exact activeClassName="class-nav-link navlinktop" > */}
            <AnchorLink href='#section3'>
            Contact
          </AnchorLink>
          {/*   </NavLink> */}
        </div>
      </div>
    )
  }
}

export default withRouter(Nav)
