import React, { Component } from 'react';
import './App.css';

import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

// Create an instance of the application that creates a component via React

const API_KEY = '3d0ef9639326e8f751a89d6ef01a91bf';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // deprecated, old way to do this
  //   }
  // }
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  // One can put their own methods here
  // JSON = Javascript Object Notation
  getWeather = async (e) => {
    // Prevent the default behavior of this component
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // Variable that makes the call to the URL
    const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    // Convert the response from the URL to json format (json is a universal accepted language)
    const data = await API_CALL.json();
    // Display the data
    console.log(data);
    // Have the state variables equal to the proper data calls
    // This is how to manipulate APIs
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      // In this API, it uses an array for the description
      description: data.weather[0].description,
      error: "",
    });
  }

  // Back in time, one had to do this to properly bind the function React version < 16.0
  // constructor() {
  //   this.getWeather = this.getWeather.bind(this);
  // }

  // Render is a built in method in order to show output to the user
  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
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
