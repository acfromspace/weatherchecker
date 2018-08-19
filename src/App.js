import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import { userInfo } from 'os';

// Create an instance of the application that creates a component via React

const API_KEY = '3d0ef9639326e8f751a89d6ef01a91bf';

class App extends React.Component {
  // One can put their own methods here
  // JSON = Javascript Object Notation
  getWeather = async () => {
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data =  await API_CALL.json();
    console.log(data);
  }

  // Before one had to do this to properly bind the function React version < 16.0
  // constructor() {
  //   this.getWeather = this.getWeather.bind(this);
  // }

  // Render is a built in method in order to show output to the user
  render() {
    return (
      <div>
        <Titles/>
        <Form/>
        <Weather/>
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

// Required for index.js to be aware of this

export default App;
