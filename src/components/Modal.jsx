import React from "react";

const Modal = ({ event, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{event.title}</h2>
        <p>{event.details}</p>
      </div>
    </div>
  );
};

export default Modal;
