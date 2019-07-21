import React, { Component } from 'react';


class SignUp extends Component {
 constructor(props) {
  super(props);
  this.state = {
   email: '',
   password: '',
  }
 }



 SignUp

 render() {
  return (
   <div className="form-inline">
    <h2>Sign Up
     <div className="form-group">
      <input
       className="form-control"
       type="text"
       placeholder="email"
       onChange={event => this.setState({ email: event.target.value })}
      />
      <input
       className="form-control"
       type="password"
       placeholder="password"
       onChange={event => this.setState({ password: event.target.value })}
      />
      <button
       className="btn btn-primary"
       type="button"
      >
       Sign Up
       </button>
     </div>
    </h2>
   </div>
  )
 }
}

export default SignUp;