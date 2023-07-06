// import * as React from 'react';
// import Map from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';




// function App() {
//   return (
//     <Map
//       mapboxAccessToken="pk.eyJ1IjoiYXJmYWtsIiwiYSI6ImNsYnQzd284eDA5OGUzcHBmc2VjOTJ4dzEifQ.RFRiN_WHNN8c4zO7nt2XLA"
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 14
//       }}
//       style={{width: 1200, height: 600}}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//     />
//   );
// }

// export default App


// import React, { useRef } from "react";
// import ReactMapboxGl from "react-mapbox-gl";
// import DrawControl from "react-mapbox-gl-draw";
// import RadiusMode from "./radius-mode";
// import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
// import "./style.css";

// const Map = ReactMapboxGl({
//   accessToken:
//     "pk.eyJ1IjoiYWxlcGhyaSIsImEiOiJjamdwbHpycjIyZm45Mndud3AzamRibHpqIn0.ejAHwSGT6dcGxiDOrPCFLg"
// });

// const App = () => {
//   const drawControlRef = useRef(null);

//   return (
//     <Map
//       style="mapbox://styles/mapbox/streets-v9"
//       containerStyle={{
//         height: "100vh",
//         width: "100vw"
//       }}
//     >
//       <DrawControl
//         modes={{
//           radius_mode: RadiusMode
//         }}
//         defaultMode="radius_mode"
//         ref={drawControlRef}
//       />
//     </Map>
//   );
// };

// export default App;
