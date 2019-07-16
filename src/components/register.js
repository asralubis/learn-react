import React, { Component } from 'react';
import '../style/register.css';




const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);




const formValid = formErrors => {
 let valid = true;

 Object.values(formErrors).forEach(val => {
  val.length > 0 && (valid = false);
 });

 return valid;
};

class RegisterForm extends Component {
 constructor(props) {
  super(props);

  this.state = {
   firstName: null,
   lastName: null,
   email: null,
   password: null,
   formErrors: {
    firstName: "",
    lastname: "",
    email: "",
    password: ""
   }
  };
 }

 handleSubmit = e => {
  e.preventDefault();

  if (formValid(this.state.formErrors)) {
   console.log(`
   --SUBMITTING--
   First Name: ${this.state.firstName}
   Last Name: ${this.state.lastName}
   Email: ${this.state.email}
   Password: ${this.state.password}
   `)
  } else {
   console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
  }
 };

 handleChange = e => {
  e.preventDefault();
  const { name, value } = e.target;
  let formErrors = this.state.formErrors;

  switch (name) {
   case 'firstName':
    formErrors.firstName =
     value.length < 3 && value.length > 0
      ? "minimum 3 characters required"
      : "";
    break;

   case 'lastName':
    formErrors.lastName =
     value.length < 3 && value.length > 0
      ? "minimum 3 characters required"
      : "";
    break;

   case 'email':
    formErrors.email =
     emailRegex.test(value) && value.length > 0
      ? ""
      : "invalid email address";
    break;

   case 'password':
    formErrors.password =
     value.length < 3 && value.length > 0
      ? "minimum 5 characters required"
      : "";
    break;
   default:
    break;

  }
 }


 render() {
  return (

   <div className="wrapper">
    <div className="form-wrapper">
     <h1>Creacte Account</h1>

     <form onSubmit={this.handleSubmit} noValidate>
      <div className="firstName">
       <label htmlFor="firstName">First Name</label>
       <input
        className=""
        placeholder="First Name"
        type="text"
        name="firstname"
        noValidate
        onChange={this.handleChange}
       />
      </div>

      <div className="lastName">
       <label htmlFor="lastName">Last Name</label>
       <input
        className=""
        placeholder="Last Name"
        type="text"
        name="lastname"
        noValidate
        onChange={this.handleChange}
       />
      </div>

      <div className="email">
       <label htmlFor="email">Email</label>
       <input
        className=""
        placeholder="Email"
        type="email"
        name="email"
        noValidate
        onChange={this.handleChange}
       />
      </div>

      <div className="password">
       <label htmlFor="password">Password</label>
       <input
        className=""
        placeholder="Password"
        type="password"
        name="password"
        noValidate
        onChange={this.handleChange}
       />
      </div>

      <div className="createAccount">
       <button type="submit">Create Account</button>
       <small>Already Have an Account ?</small>
      </div>

     </form>
    </div>
   </div>
  )
 }
}


export default RegisterForm;