import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Navigation from './components/navigation';
import Header from './components/header';

import LoginForm from './components/login';
import RegisterForm from './components/register';

import Card from './components/card';
import Footer from './components/footer';


import * as serviceWorker from './serviceWorker';


class App extends Component {
 render() {
  return (
   <div>
    <Navigation />
    <Header title="AxstrA School" />
    {/* <LoginForm /> */}
    {/* <RegisterForm /> */}
    <Card />
    <Footer />
   </div>
  );
 }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
