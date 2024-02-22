import React from "react";
import Item from "../Item/Item";

import "./Encounter.css";

const Encounter = ({ selectedResults, onRemove }) => {
  console.log(selectedResults);
  return (
    <div className="encounter">
      {selectedResults.map((result, index) => {
        return (
          <Item
            key={index}
            item={result}
            add={false}
            onButtonClick={onRemove}
          />
        );
      })}
    </div>
  );
};

export default Encounter;
