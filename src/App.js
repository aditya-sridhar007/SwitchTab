import React from "react";
import Switch from "./Switch";
import camera from "./camera";

camera.startCamera();
camera.takeSnapshot();

function App() {
  return (
    <div>
      <h1>iVerified</h1>
      <Switch />
    </div>
  );
}

export default App;
