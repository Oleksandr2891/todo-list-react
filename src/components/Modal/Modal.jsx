import React from "react";
import styles from "./Modal.module.scss";
import { ReactComponent as Close } from "../../assets/icon/cross.svg";
import { Portal } from "../Portal/Portal";

export class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.onHandleClose = this.props.handleClose;
  }

  handleClose = (event) => {
    event.preventDefault();
    if (
      event.target.id === "modalWrapper" ||
      event.target.tagName === "BUTTON"
    ) {
      this.props.onHandleClose();
    }
  };

  render() {
    return (
      <Portal>
        <div
          id="modalWrapper"
          className={styles.modal__wrapper}
          onClick={this.handleClose}
        >
          <div className={styles.modal}>
            {this.props.children}
            <button
              onClick={this.handleClose}
              className={styles.modal__buttonClose}
            >
              <Close />
            </button>
          </div>
        </div>
      </Portal>
    );
  }
}
