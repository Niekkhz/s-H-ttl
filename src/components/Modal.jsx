import React from "react";
import "./Modal.css";

const Modal = ({ event, onClose, children }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{event.title}</h2>
        <p>{event.details}</p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
