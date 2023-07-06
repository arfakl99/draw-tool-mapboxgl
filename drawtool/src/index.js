// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();


// class component


// const Map = ReactMapboxGl({
//   accessToken:
//     "pk.eyJ1IjoiYWxlcGhyaSIsImEiOiJjamdwbHpycjIyZm45Mndud3AzamRibHpqIn0.ejAHwSGT6dcGxiDOrPCFLg"
// });

// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.drawControl = null;
//   }

//   render() {
//     return (
//       <Map
//         style="mapbox://styles/mapbox/streets-v9"
//         containerStyle={{
//           height: "100vh",
//           width: "100vw"
//         }}
//       >
//         <DrawControl
//           modes={{
//             radius_mode: RadiusMode
//           }}
//           defaultMode="radius_mode"
//           ref={drawControl => {
//             this.drawControl = drawControl;
//           }}
//         />
//       </Map>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


// function component

import { useRef } from "react";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import RadiusMode from "./radius-mode";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

import "./style.css";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiYWxlcGhyaSIsImEiOiJjamdwbHpycjIyZm45Mndud3AzamRibHpqIn0.ejAHwSGT6dcGxiDOrPCFLg"
});

const App = () => {
  const drawControlRef = useRef(null);

  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}
    >
      <DrawControl
        modes={{
          radius_mode: RadiusMode
        }}
        defaultMode="radius_mode"
        ref={drawControlRef}
      />
    </Map>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);