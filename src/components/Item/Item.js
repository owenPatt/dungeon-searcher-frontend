import { useState } from "react";
import "./Item.css";

const Item = (item) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExpand = () => {
    setIsOpen(!isOpen);
  };

  let alignment;
  if (item.alignment === "") {
    alignment = "";
  } else {
    alignment = " - " + item.alignment;
  }

  let speed = item.speed.walk + "ft";
  if (item.speed.fly) {
    speed += " - " + item.speed.fly + "ft (fly)";
  }
  if (item.speed.burrow) {
    speed += " - " + item.speed.burrow + "ft (burrow)";
  }
  if (item.speed.swim) {
    speed += " - " + item.speed.swim + "ft (swim)";
  }

  return (
    <div className="item">
      <div className="item__top" onClick={toggleExpand}>
        <div className="item__left-side">
          <h3 className="item__name">{item.name}</h3>
          {item.subtype !== "" ? (
            <p className="item__type">
              {item.type + ", " + item.subtype + " - " + item.size + alignment}
            </p>
          ) : (
            <p className="item__type">
              {item.type + " - " + item.size + alignment}
            </p>
          )}
        </div>
        <div className="item__right-side">
          <p className="item__doc">{item.document__title}</p>
          <p className="item__cr">CR: {item.cr}</p>
        </div>
      </div>
      <div className={`item__expand ${isOpen ? "item__expand_expanded" : ""}`}>
        <div className="item__stat-section">
          <p className="item__stat">
            AC: {item.armor_class} ({item.armor_desc})
          </p>
          <p className="item__stat">
            HP: {item.hit_points} ({item.hit_dice})
          </p>
          {item.damage_immunities !== "" ? (
            <p className="item__stat">Immunities: {item.damage_immunities}</p>
          ) : (
            ""
          )}
          {item.damage_resistances !== "" ? (
            <p className="item__stat">Resistances: {item.damage_resistances}</p>
          ) : (
            ""
          )}
          {item.damage_vulnerabilities !== "" ? (
            <p className="item__stat">
              Vulnerabilities: {item.damage_vulnerabilities}
            </p>
          ) : (
            ""
          )}
          <p className="item__stat">Speed: {speed}</p>
        </div>
        <div className="item__stat-section">
          <p className="item__stat">
            Str: {item.strength} - Dex: {item.dexterity} - Con:{" "}
            {item.constitution} - Int: {item.intelligence} - Wis: {item.wisdom}{" "}
            - Cha: {item.charisma}
          </p>
        </div>
        <div className="item__stat-section">
          <p className="item__stat">
            Skills:{" "}
            {Object.keys(item.skills).map((key, index) => {
              const skill = key + ": +" + item.skills[key];
              return index === Object.keys(item.skills).length - 1
                ? skill
                : skill + ", ";
            })}
          </p>
          <p className="item__stat">Sense: {item.senses}</p>
          <p className="item__stat">Languages: {item.languages}</p>
        </div>
        <div className="item__stat-section">
          {item.special_abilities !== null ? (
            <p className="item__stat">Special Abilities</p>
          ) : (
            ""
          )}
          {item.special_abilities !== null
            ? item.special_abilities.map((ability, index) => (
                <p className="item__stat item__stat_indent" key={index}>
                  {ability.name}: {ability.desc}
                </p>
              ))
            : ""}

          <p className="item__stat">Actions</p>
          {item.actions !== null
            ? item.actions.map((actions, index) => (
                <p className="item__stat item__stat_indent" key={index}>
                  {actions.name}: {actions.desc}
                </p>
              ))
            : ""}

          {item.legendary_actions !== null ? (
            <p className="item__stat">Legendary Actions</p>
          ) : (
            ""
          )}
          {item.legendary_actions !== null
            ? item.legendary_actions.map((action, index) => (
                <p className="item__stat item__stat_indent" key={index}>
                  {action.name}: {action.desc}
                </p>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Item;