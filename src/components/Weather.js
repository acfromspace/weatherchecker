import React from "react";

const Weather = props => (
  <div className="weather__info">
    {/* The && shows that all conditions must be met in order to display what is desired. */}
    {/* COORDINATES. */}
    {props.latitude && props.longitude && (
      <p className="weather__key">
        {" "}
        Coordinates:
        <span className="weather__value">
          {" "}
          Lat {props.latitude}
          °, Lon {props.longitude}°{" "}
        </span>
      </p>
    )}
    {/* CITY AND COUNTRY. */}
    {props.city && props.country && (
      <p className="weather__key">
        {" "}
        Location:
        <span className="weather__value">
          {" "}
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {/* TEMPERATURE. */}
    {props.temperature && (
      <p className="weather__key">
        {" "}
        Temperature:
        {/* Second temperature is Celsius to Fahrenheit to the 2nd decimal. */}
        <span className="weather__value">
          {" "}
          {props.temperature}° C, {(props.temperature * 1.8 + 32).toFixed(2)}° F
        </span>
      </p>
    )}
    {/* HUMIDITY. */}
    {props.humidity && (
      <p className="weather__key">
        {" "}
        Humidity:
        <span className="weather__value"> {props.humidity}% </span>
      </p>
    )}
    {/* DESCRIPTION (of what is in the sky). */}
    {props.description && (
      <p className="weather__key">
        {" "}
        Conditions:
        <span className="weather__value"> {props.description} ~ </span>
      </p>
    )}
    {/* WIND. */}
    {props.wind && (
      <p className="weather__key">
        {" "}
        Wind speed:
        <span className="weather__value"> {props.wind} mph </span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
