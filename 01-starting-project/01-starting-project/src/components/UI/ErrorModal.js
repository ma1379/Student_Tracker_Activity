import React from "react";
import "./ErrorModal.css";
import Card from "./Card";
import Button from "./Button";
const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" />
      <div className="modal">
        <Card>
          <header className="header">
            <h2>{props.title}</h2>
          </header>
          <div className="content">
            <p>{props.message}</p>
          </div>
          <footer className="actions">
            <Button>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};
export default ErrorModal;
