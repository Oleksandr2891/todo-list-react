import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import styles from "./ToDoHeader.module.scss";
import { ReactComponent as MenuIcon } from "../../assets/icon/menu_icon.svg";
import { ReactComponent as AddItem } from "../../assets/icon/plus.svg";
import { v4 as uuidv4 } from "uuid";

function ToDoHeader({ title, openModal, onChangeFilter }) {
  const headerButtonConfig = [
    {
      id: uuidv4(),
      style: "menu",
      icon: <MenuIcon />,
      action: () => {
        onChangeFilter();
      },
    },
    {
      id: uuidv4(),
      style: "add",
      icon: <AddItem />,
      action: () => {
        openModal(true);
      },
    },
  ];

  return (
    <div className={styles.headerWrapper}>
      <ButtonWithIcon
        key={headerButtonConfig[0].id}
        icon={headerButtonConfig[0].icon}
        action={headerButtonConfig[0].action}
        style={headerButtonConfig[0].style}
      />
      <h1 className={styles.headerWrapper__title}>{title}</h1>
      <ButtonWithIcon
        key={headerButtonConfig[1].id}
        icon={headerButtonConfig[1].icon}
        action={headerButtonConfig[1].action}
        style={headerButtonConfig[1].style}
      />
    </div>
  );
}

export default ToDoHeader;
