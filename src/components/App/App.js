import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import React, { useState } from "react";
import { Open5e } from "../../utils/api";

function App() {
  const [selectedResults, setSelectedResults] = useState([]);

  const addSelectedResult = (result) => {
    setSelectedResults([...selectedResults, result]);
  };

  const open5e = new Open5e();
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main open5e={open5e} addSelectedResult={addSelectedResult} />
    </div>
  );
}

export default App;
