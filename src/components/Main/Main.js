import "./Main.css";
import { useState } from "react";
import { Open5e } from "../../utils/api";

function Main() {
  const [searchValue, setSearchValue] = useState("");

  const open5e = new Open5e();

  const search = (event) => {
    event.preventDefault();
    open5e
      .searchMonsters(searchValue)
      .then((monsters) => {
        console.log(monsters);
        setSearchValue("");
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
    </main>
  );
}

export default Main;
