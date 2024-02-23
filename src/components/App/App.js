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
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [numResults, setNumResults] = useState(0);
  const [level, setLevel] = useState(1);

  const addSelectedResult = (result) => {
    setSelectedResults([...selectedResults, result]);
  };

  const handleSetResults = (newResults) => {
    setResults(newResults);
  };

  const handleSetPage = (newPage) => {
    setPage(newPage);
  };

  const handleSetNumResults = (newNumResults) => {
    setNumResults(newNumResults);
  };

  const handleSetLevel = (newLevel) => {
    setLevel(newLevel);
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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />{" "}
              <Main
                open5e={open5e}
                addSelectedResult={addSelectedResult}
                results={results}
                setResults={handleSetResults}
                page={page}
                setPage={handleSetPage}
                numResults={numResults}
                setNumResults={handleSetNumResults}
              />{" "}
            </>
          }
        />
        <Route
          path="/encounter"
          element={
            <Encounter
              selectedResults={selectedResults}
              onRemove={removeSelectedResult}
              level={level}
              setLevel={handleSetLevel}
            />
          }
        />
        <Route path="/about" element={<p>Hello</p>} />
      </Routes>
    </div>
  );
}

export default App;
