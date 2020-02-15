import React, { Component } from "react"
import "./Contact.css"

class Contact extends Component {
  state = {
    body: ""
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log("email sent")
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <>
        <h5>Email us</h5>
        <form action="">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <textarea
            className="writeMsgInput"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder="Write a message..."
          />
          <input
            className="sendEmailButton"
            type="submit"
            value="Send email"
            onClick={this.handleSubmit}
          />
        </form>
      </>
    )
  }
}

export default Contact
