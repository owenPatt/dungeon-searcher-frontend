import "./Modal.css";

const Modal = ({ isOpen, onClose = null, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal__content">
        {children}
        {onClose !== null && (
          <button className="modal__close-button" onClick={onClose}>
            X
          </button>
        )}
      </div>
    </div>
  );
};

export default Modal;
