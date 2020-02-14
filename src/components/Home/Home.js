import React, { Component } from "react"
import Header from "../Header/Header"
import "./Home.css"
import "./Parallax.css"

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <section className=""></section>
        <div className="parallax parallax1"></div>
        <section className=""></section>
        <div className="parallax parallax2"></div>
        <section className=""></section>
        <div className="parallax parallax3"></div>
      </div>
    )
  }
}
