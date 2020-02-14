import React, { Component } from "react"
import "./Footer.css"

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footerlists">
          <ul className="footerlist1">
            List 1<li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <ul className="footerlist2">
            List 2<li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
          <ul className="footerlist3">
            List 3<li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <div className="copyright">Kartanon Kirsut - Koirahoitola | © 2020</div>
      </div>
    )
  }
}
