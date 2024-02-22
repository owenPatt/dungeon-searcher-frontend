import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Main from "../Main/Main";
import Encounter from "../Encounter/Encounter";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Open5e } from "../../utils/api";

function App() {
  const [selectedResults, setSelectedResults] = useState([]);

  const addSelectedResult = (result) => {
    setSelectedResults([...selectedResults, result]);
  };

  const removeSelectedResult = (result) => {
    const index = selectedResults.findIndex((item) => item === result);
    if (index !== -1) {
      const newResults = [...selectedResults];
      newResults.splice(index, 1);
      setSelectedResults(newResults);
    }
  };

  const open5e = new Open5e();
  return (
    <div className="app">
      <Nav />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main open5e={open5e} addSelectedResult={addSelectedResult} />
          }
        />
        <Route
          path="/encounter"
          element={
            <Encounter
              selectedResults={selectedResults}
              onRemove={removeSelectedResult}
            />
          }
        />
        <Route
          path="/about"
          element={
            <Main open5e={open5e} addSelectedResult={addSelectedResult} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
