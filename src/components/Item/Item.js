import "./Item.css";

const Item = (item) => {
  return (
    <div className="item">
      <div className="item__left-side">
        <h3 className="item__name">{item.name}</h3>
        {item.subtype !== "" ? (
          <p className="item__type">{item.type + ", " + item.subtype}</p>
        ) : (
          <p className="item__type">{item.type}</p>
        )}
      </div>
      <div className="item__right-side">
        <p className="item__doc">{item.document__title}</p>
        <p className="item__cr">CR: {item.cr}</p>
      </div>
    </div>
  );
};

export default Item;
