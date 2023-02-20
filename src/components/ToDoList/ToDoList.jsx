import ListItem from "../ListItem/ListItem";
import styles from "./ToDoList.module.scss";

function ToDoList({ toDoList, actions }) {
  return (
    <div className={styles.listWrapper}>
      {!!toDoList.length ? (
        toDoList.map((item) => {
          return (
            <ListItem
              title={item.title}
              id={item.id}
              key={item.id}
              actions={actions}
              isDone={item.isDone}
            />
          );
        })
      ) : (
        <p>Ви ще не створили жодної задачі або вправно виконали і видалили!</p>
      )}
    </div>
  );
}

export default ToDoList;
