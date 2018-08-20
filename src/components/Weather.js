import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                <p>Location: {this.props.city}{this.props.country}</p>
                <p>Temperature: {this.props.temperature}</p>
                <p>Humidity: {this.props.humidity}</p>
                <p>Description: {this.props.description}</p>
                {/* Wind speed perhaps? */}
            </div>
        );
    }
}

export default Weather;