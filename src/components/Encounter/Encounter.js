import Item from "../Item/Item";
import "./Encounter.css";

import calculateChallengeRating from "../../utils/challengeRatingCalculator";

const Encounter = ({ selectedResults, onRemove, level, setLevel }) => {
  return (
    <div className="encounter">
      <h2 className="encounter__title">Encounter</h2>

      <div className="encounter__level-container">
        <p className="encounter__level-label">Party Level:</p>
        <select
          className="encounter__select-level"
          value={level}
          onChange={(e) => setLevel(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>

      {selectedResults.length > 0 ? (
        <div className="encounter__stats">
          <p className="encounter__stat">
            Challenge Rating: {calculateChallengeRating(level, selectedResults)}
          </p>
        </div>
      ) : (
        ""
      )}
      {selectedResults.length > 0 ? (
        selectedResults.map((result, index) => {
          return (
            <Item
              key={index}
              item={result}
              add={false}
              onButtonClick={onRemove}
            />
          );
        })
      ) : (
        <p className="encounter__none-selected">No monsters selected yet!</p>
      )}
    </div>
  );
};

export default Encounter;
