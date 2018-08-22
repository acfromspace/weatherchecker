import React from "react";
import ReactDOM from "react-dom";
// Installed bootstrap to change the styling of fonts
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import './index.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Render this component (App) to this root element which is getElementById('root')
// ReactDOM.render() takes two arguments, first being the app, second being the div

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
