import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// import LoginForm from './components/login';
// import RegisterForm from './components/register';



// class App extends Component {
//  render() {
//   return (
//    <div>
//     <Navigation />

//     {/* <LoginForm /> */}
//     {/* <RegisterForm /> */}
//     <Card />
//     <Footer />
//    </div>
//   );
//  }
// }

const Home = () => {
 return (
  <div>
   <Navigation />
   <Header title="AxstrA School" />
   <Card />
   <Footer />
  </div>
 )
}

export default Home;
