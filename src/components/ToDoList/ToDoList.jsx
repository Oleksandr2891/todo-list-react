import ListItem from "../ListItem/ListItem";
import styles from "./ToDoList.module.scss";

function ToDoList({ toDoList }) {
  return (
    <div className={styles.listWrapper}>
      {toDoList.map((item) => {
        return <ListItem title={item.title} id={item.id} key={item.id} />;
      })}
    </div>
  );
}

export default ToDoList;
