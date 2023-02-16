import ButtonPanel from "../ButtonPanel/ButtonPanel";
import styles from "./ListItem.module.scss";
import { ReactComponent as Checkmark } from "../../assets/icon/checkmark.svg";
import cn from "classnames";

function ListItem({ title, id, actions, isDone }) {
  return (
    <div className={styles.listItemWrapper}>
      <p className={cn({ [styles.listItemWrapper__title_done]: isDone })}>
        {title}
      </p>
      <ButtonPanel id={id} actions={actions} isDone={isDone} />
      {isDone && <Checkmark className={styles.itemChecked} />}
    </div>
  );
}

export default ListItem;
