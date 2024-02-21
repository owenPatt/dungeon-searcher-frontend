import "./Main.css";
import { useState } from "react";
import Loading from "../Loading/Loading";
import ResultBody from "../ResultBody/ResultBody";

function Main({ open5e, addSelectedResult }) {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [numResults, setNumResults] = useState(0);

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
          <button className="main__button" type="button">
            Filters
          </button>
        </div>
      </form>

      {loading ? (
        <Loading />
      ) : results.length === 0 ? (
        ""
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
