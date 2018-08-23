import React, { Component } from "react";
import "./App.css";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

// Create an instance of the application that creates a component via React
// Should hide in an .env file

require('dotenv').config()

let OPEN_WEATHER_ID = process.env.REACT_APP_OPEN_WEATHER_ID;

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
    wind: undefined,
    latitude: undefined,
    longitude: undefined,
    error: undefined
  };
  // One can put their own methods here
  // JSON = Javascript Object Notation
  getWeather = async e => {
    // Prevent the default behavior of this component
    e.preventDefault();
    // Input from the user
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // Variable that makes the call to the URL
    // REMEMBER TO USE "HTTPS" BECAUSE BROWSERS WILL BLOCK YOU FOR BEING UNSAFE
    const API_CALL = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${OPEN_WEATHER_ID}&units=metric`
    );
    // Convert the response from the URL to json format (json is a universal accepted language)
    const data = await API_CALL.json();
    // If both return true, then render the code
    if (city && country) {
      // // Display the data
      console.log(data);
      console.log(process.env.REACT_APP_OPEN_WEATHER_ID)
      // Have the state variables equal to the proper data calls
      // This is how to manipulate APIs
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        // In this API, it uses an array for the description
        description: data.weather[0].description,
        wind: data.wind.speed,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        latitude: undefined,
        longitude: undefined,
        error: "Please enter the value."
      });
    }
  };

  // Back in time, one had to do this to properly bind the function React version < 16.0
  // constructor() {
  //   this.getWeather = this.getWeather.bind(this);
  // }

  // Render is a built in method in order to show output to the user
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                {/* 5 columns on the left hand side */}
                {/* to see what the styling titles do (for ex: title container) looks at App.css */}
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                {/* 7 columns on the right hand side */}
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    wind={this.state.wind}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
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
