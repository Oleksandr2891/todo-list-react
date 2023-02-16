import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

export class Modal extends React.Component {
  el = document.createElement("div");

  componentDidMount() {
    document.body.appendChild(this.el);
  }
  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  handleCloseModal = (event) => {
    if (event.target.id === "modalWrapper") {
      document.body.removeChild(this.el);
    }
  };
  render() {
    return ReactDOM.createPortal(
      <>
        <div
          id="modalWrapper"
          className={styles.modal__wrapper}
          onClick={this.handleCloseModal}
        >
          <div className={styles.modal}>{this.props.children}</div>
        </div>
      </>,
      this.el
    );
  }
}
