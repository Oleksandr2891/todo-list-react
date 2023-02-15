import styles from "./ButtonPanel.module.scss";
import { ReactComponent as Checkmark } from "../../assets/icon/checkmark.svg";
import { ReactComponent as Pencil } from "../../assets/icon/pencil.svg";
import { ReactComponent as RadioUnchecked } from "../../assets/icon/radio-unchecked.svg";
import { ReactComponent as Switch } from "../../assets/icon/switch.svg";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import { v4 as uuidv4 } from "uuid";

export const createSVG = (SVGComponent) => (props) =>
  <SVGComponent {...props} />;

const buttonConfig = [
  {
    id: uuidv4(),
    style: "radioUnchecked",
    icon: <RadioUnchecked />,
    action: (id) => {
      console.log(id);
    },
  },
  // {
  //   id: uuidv4(),
  //   icon: <Checkmark />,
  //   action: (id) => {
  //     console.log(id);
  //   },
  // },
  {
    id: uuidv4(),
    style: "pencil",
    icon: <Pencil />,
    action: (id) => {
      console.log(id);
    },
  },
  {
    id: uuidv4(),
    style: "switch",
    icon: <Switch />,
    action: (id) => {
      console.log(id);
    },
  },
];

function ButtonPanel() {
  return (
    <div className={styles.buttonPanelWrapper}>
      {buttonConfig.map((item, idx) => {
        return (
          <ButtonWithIcon
            key={`${item.id}-${idx}`}
            icon={item.icon}
            action={item.action}
            id={item.id}
            style={item.style}
          />
        );
      })}
    </div>
  );
}

export default ButtonPanel;
