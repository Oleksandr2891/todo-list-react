import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import styles from "./ToDoHeader.module.scss";
import { ReactComponent as MenuIcon } from "../../assets/icon/menu_icon.svg";

function ToDoHeader() {
  return (
    <div className={styles.headerWrapper}>
      <ButtonWithIcon
        icon={<MenuIcon />}
        action={() => {
          console.log("menu");
        }}
        key={"key1"}
      />
      <h1 className={styles.headerWrapper__title}>Весь перелік</h1>
    </div>
  );
}

export default ToDoHeader;
