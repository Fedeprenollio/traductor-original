import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Traductor } from "./components/Traductor";

function App() {
  return (
    <div className="contenedor">
      <Traductor />
    </div>
  );
}

export default App;
