import Item from "../Item/Item";
import "./ResultBody.css";

const ResultBody = ({ items, page, updatePage, numResults }) => {
  const lastPage = Math.ceil(numResults / 50);
  console.log(page + " " + lastPage + " " + numResults);

  return (
    <div className="result-body">
      {items.map((item, index) => {
        return <Item key={index} {...item} />;
      })}
      <div className="result-body__buttons">
        {page > 1 ? (
          <button
            className="result-body__button"
            onClick={() => {
              if (page > 1) updatePage(page - 1);
            }}>
            Previous
          </button>
        ) : (
          <div></div>
        )}
        <p className="result-body__page-num">
          {page} of {lastPage}
        </p>
        {page < lastPage ? (
          <button
            className="result-body__button"
            onClick={() => {
              updatePage(page + 1);
            }}>
            Next
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ResultBody;
