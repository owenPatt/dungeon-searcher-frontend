import "./App.css";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Encounter from "../Encounter/Encounter";
import About from "../About/About";
import Footer from "../Footer/Footer";
import React, { useState, useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import { Open5e } from "../../utils/api";

function App() {
  const [selectedResults, setSelectedResults] = useState([]);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [numResults, setNumResults] = useState(0);
  const [level, setLevel] = useState(1);

  const open5e = useMemo(() => new Open5e(), []);

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

  return (
    <div className="app">
      <Navigation />
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
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
