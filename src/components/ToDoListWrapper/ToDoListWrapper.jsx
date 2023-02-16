import React from "react";
import ToDoHeader from "../ToDoHeader/ToDoHeader";
import ToDoList from "../ToDoList/ToDoList";
import styles from "./ToDoListWrapper.module.scss";
import list from "../../assets/config-todo.json";

export class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [] };
  }

  getList = () => {
    return this.state.list;
  };

  setList = (newList) => {
    this.setState({ list: [...newList] });
  };

  removeHandler = (id) => {
    if (!!this.state.list.length) {
      const idxList = this.state.list.findIndex((el) => {
        return el.id === id;
      });
      if (idxList !== -1) {
        console.log(this.state.list[idxList]);
        this.setState((prev) => ({
          list: [
            ...prev.list.slice(0, idxList),
            ...prev.list.slice(idxList + 1),
          ],
        }));
      }
    }
  };

  renameHandler = (id, value) => {
    if (!!this.state.list.length) {
      const idxList = this.state.list.findIndex((el) => {
        return el.id === id;
      });
      if (idxList !== -1) {
        console.log(this.state.list[idxList]);
        this.setState((prev) => ({
          list: [
            ...prev.list.slice(0, idxList),
            { ...prev.list[idxList], title: value },
            ...prev.list.slice(idxList + 1),
          ],
        }));
      }
    }
  };

  completeHandler = (id) => {
    if (!!this.state.list.length) {
      const idxList = this.state.list.findIndex((el) => {
        return el.id === id;
      });
      if (idxList !== -1) {
        this.setState((prev) => ({
          list: [
            ...prev.list.slice(0, idxList),
            { ...prev.list[idxList], isDone: !prev.list[idxList].isDone },
            ...prev.list.slice(idxList + 1),
          ],
        }));
      }
    }
  };

  componentDidMount() {
    if (!this.state.list.length) {
      this.setList(list);
    }
  }

  render() {
    const { list } = this.state;
    const actions = {
      onRemove: this.removeHandler,
      onRename: this.renameHandler,
      onComplete: this.completeHandler,
    };
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper__panel}>
          <ToDoHeader />
          <ToDoList toDoList={list} actions={actions} />
        </div>
      </div>
    );
  }
}
