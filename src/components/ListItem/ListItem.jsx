import ButtonPanel from "../ButtonPanel/ButtonPanel";
import styles from "./ListItem.module.scss";

function ListItem({ title, id }) {
  return (
    <div className={styles.listItemWrapper}>
      <p>{title}</p>
      <ButtonPanel />
    </div>
  );
}

export default ListItem;
