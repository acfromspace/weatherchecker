import React, { Component } from 'react';

class Weather extends Component {
    render() {
        return (
            <div>
                {/* The && functions as if "Only perform if all are true" */}
                { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                { this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                { this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
                { this.props.description && <p>Description: {this.props.description}</p>}
                { this.props.error && <p>{ this.props.error }</p>}
                {/* Wind speed perhaps? */}
            </div>
        );
    }
}

export default Weather;