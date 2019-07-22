import React, { Component } from 'react';
import '../style/SignIn.css';



class SignIn extends Component {
 state = {
  email: '',
  password: ''
 }
 handleChange = (e) => {
  this.setState({
   [e.target.id]: e.target.value
  })
 }
 handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
 }

 render() {
  return (


   <div className="login-form">
    <div className="arrow-up" ></div>
    <form>

     <div className="input-field">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={this.handleChange} />
     </div>
     <div className="input-field">
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={this.handleChange} />
     </div>
     <div className="input-field">
      <button className="button">Sign In</button>
     </div>
    </form>
   </div>
  )
 }
}

export default SignIn;