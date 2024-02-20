import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import React from "react";
import { Open5e } from "../../utils/api";

function App() {
  const open5e = new Open5e();
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main open5e={open5e} />
    </div>
  );
}

export default App;
