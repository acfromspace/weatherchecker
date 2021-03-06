import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <button>Get Weather</button>
  </form>
);

export default Form;

// This way utilizes more unneeded resources and takes up more space.

// import React, { Component } from "react";

// class Form extends Component {
//   render() {
//     return (
//       <form onSubmit={this.props.getWeather}>
//         <input type="text" name="city" placeholder="City..." />
//         <input type="text" name="country" placeholder="Country..." />
//         <button>Get Weather</button>
//       </form>
//     );
//   }
// }

// export default Form;
