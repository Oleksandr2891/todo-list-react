import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import styles from "./ToDoHeader.module.scss";
import { ReactComponent as MenuIcon } from "../../assets/icon/menu_icon.svg";
import { ReactComponent as AddItem } from "../../assets/icon/plus.svg";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

function ToDoHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={styles.headerWrapper}>
      <ButtonWithIcon
        icon={<MenuIcon />}
        action={() => {
          console.log("menu");
        }}
      />
      <h1 className={styles.headerWrapper__title}>Весь перелік</h1>
      <ButtonWithIcon icon={<AddItem />} action={handleOpen} />
      {isModalOpen && (
        <Modal onHandleClose={handleClose}>this text from modal</Modal>
      )}
    </div>
  );
}

export default ToDoHeader;
