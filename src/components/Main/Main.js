import "./Main.css";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import ResultBody from "../ResultBody/ResultBody";

function Main({
  open5e,
  addSelectedResult,
  results,
  page,
  numResults,
  setResults,
  setPage,
  setNumResults,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const updatePage = (newPage) => {
    setResults([]);
    setPage(newPage);
    setLoading(true);
    open5e
      .changePage(newPage)
      .then((monsters) => {
        console.log(monsters);
        if (monsters.results) setResults(monsters.results);
        setNumResults(monsters.count);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const search = (event) => {
    setPage(1);
    event.preventDefault();
    setLoading(true);
    setHasSearched(true);
    open5e
      .searchMonsters(searchValue)
      .then((monsters) => {
        console.log(monsters);
        if (monsters.results) setResults(monsters.results);
        setNumResults(monsters.count);
        setSearchValue("");
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <main className="main">
      <h2 className="main__header">Search Creatures</h2>
      <form className="main__form" onSubmit={search}>
        <div className="main__search-bar">
          <input
            className="main__input"
            id="search"
            type="text"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Goblin"
          />
        </div>
      </form>

      {loading ? (
        <Preloader />
      ) : results.length === 0 && hasSearched ? (
        <p className="main__search-error">No Results Found</p>
      ) : (
        <ResultBody
          items={results}
          page={page}
          updatePage={updatePage}
          numResults={numResults}
          onAdd={addSelectedResult}></ResultBody>
      )}
    </main>
  );
}

export default Main;
