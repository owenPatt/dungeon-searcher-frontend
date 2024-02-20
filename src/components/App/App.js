import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import React, { useState } from "react";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
