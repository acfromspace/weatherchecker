import React from "react";

const Titles = () => (
  <div>
    <h1 className="title-container__title">(Weather Checker)</h1>
    <h3 className="title-container__subtitle">
      Whether it be{" "}
      <span role="img" aria-label="Sun">
        ☀️
      </span>{" "}
      or{" "}
      <span role="img" aria-label="Cloud With Rain">
        🌧️
      </span>
      , find out!
    </h3>
  </div>
);

export default Titles;

// import React, { Component } from "react";

// class Titles extends Component {
//   render() {
//     return (
//       <div>
//         {/* Not "class", but "classname" */}
//         <h1 className="title-container__title">Weather Finder</h1>
//         <h3 className="title-container__subtitle">
//           Find out temperature, conditions, and more...
//         </h3>
//       </div>
//     );
//   }
// }

// export default Titles;
