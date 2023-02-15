import styles from "./ButtonWithIcon.module.scss";
import cn from "classnames";

function ButtonWithIcon({ icon, action, id, style }) {
  return (
    <button
      className={cn(styles.button, styles[style])}
      onClick={() => action(id)}
    >
      {icon}
    </button>
  );
}

export default ButtonWithIcon;
