import "bootstrap/dist/css/bootstrap.css";
import { Spinner } from "react-bootstrap";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <Spinner animation="border" role="status" className="loading__spinner">
        <span className="visually-hidden preloader__spinner">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Preloader;
