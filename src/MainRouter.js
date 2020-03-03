import React, { Component } from "react"
import { Route, Switch } from "react-router-dom"
// import AnchorLink from 'react-anchor-link-smooth-scroll'

import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"

const Home = React.lazy(() => import("./components/Home/Home"))
const About = React.lazy(() => import("./components/About/About"))
const Rates = React.lazy(() => import("./components/Rates/Rates"))
const Booking = React.lazy(() => import("./components/Booking/Booking"))

export default class MainRouter extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about-us" component={About}></Route>
          <Route exact path="/rates" component={Rates}></Route>
          <Route exact path="/booking" component={Booking}></Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    )
  }
}
