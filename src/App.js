import React, { Component } from "react"
import {
  BrowserRouter as Router
  // , Route, Switch, Link
} from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav/Nav"
import Home from "./components/Home/Home"
import MainRouter from "./MainRouter"
import Spinner from "./components/Spinner/Spinner"

export default class App extends Component {
  state = {}

  render() {
    return (
      <>
        <div className="App">
          <Router>
            <React.Suspense fallback={<Spinner />}>
              <MainRouter />
            </React.Suspense>
          </Router>
        </div>
      </>
    )
  }
}
