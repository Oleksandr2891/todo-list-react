import ToDoHeader from "../ToDoHeader/ToDoHeader";
import ToDoList from "../ToDoList/ToDoList";
import styles from "./ToDoListWrapper.module.scss";
import list from "../../assets/config-todo.json";

function ToDoListWrapper() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__panel}>
        <ToDoHeader />
        <ToDoList toDoList={list} />
      </div>
    </div>
  );
}

export default ToDoListWrapper;
