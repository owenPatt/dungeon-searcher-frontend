import "./Main.css";

function Main() {
  return (
    <main className="main">
      <h2 className="main__header">Search Creatures</h2>
      <form className="main__form">
        <div className="main__search-bar">
          <input
            className="main__input"
            id="search"
            type="text"
            placeholder="Goblin"
          />
          <button className="main__button" type="button">
            Filter
          </button>
        </div>
      </form>
    </main>
  );
}

export default Main;
