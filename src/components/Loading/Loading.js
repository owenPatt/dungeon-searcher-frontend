import "bootstrap/dist/css/bootstrap.css";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <Spinner animation="border" role="status" className="loading__spinner">
        <span className="visually-hidden loading__spinner">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
