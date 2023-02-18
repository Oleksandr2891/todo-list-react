import styles from "./ButtonPanel.module.scss";
import { ReactComponent as Checkmark } from "../../assets/icon/checkmark.svg";
import { ReactComponent as Pencil } from "../../assets/icon/pencil.svg";
import { ReactComponent as RadioUnchecked } from "../../assets/icon/radio-unchecked.svg";
import { ReactComponent as Switch } from "../../assets/icon/switch.svg";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import { v4 as uuidv4 } from "uuid";

function ButtonPanel({ actions, id, isDone }) {
  const buttonConfig = [
    {
      id: uuidv4(),
      style: "radioUnchecked",
      icon: <RadioUnchecked />,
      action: (id) => {
        actions.onComplete(id);
      },
    },
    {
      id: uuidv4(),
      style: "checkmark",
      icon: <Checkmark />,
      action: (id) => {
        actions.onComplete(id);
      },
    },
    {
      id: uuidv4(),
      style: "pencil",
      icon: <Pencil />,
      action: (id) => {
        actions.onRename(id);
      },
    },
    {
      id: uuidv4(),
      style: "switch",
      icon: <Switch />,
      action: (id) => {
        actions.onRemove(id);
      },
    },
  ];

  return (
    <div className={styles.buttonPanelWrapper}>
      {buttonConfig.map((item) => {
        if (item.style === "radioUnchecked" && isDone) {
          return false;
        } else if (item.style === "checkmark" && !isDone) {
          return false;
        } else {
          return (
            <ButtonWithIcon
              key={item.id}
              icon={item.icon}
              action={item.action}
              id={id}
              style={item.style}
            />
          );
        }
      })}
    </div>
  );
}

export default ButtonPanel;
