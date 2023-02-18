import React from "react";
import ToDoHeader from "../ToDoHeader/ToDoHeader";
import ToDoList from "../ToDoList/ToDoList";
import styles from "./ToDoListWrapper.module.scss";
import list from "../../utils/config-todo.json";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "../Modal/Modal";
import InputForm from "../InputForm/InputForm";
import { filterList } from "../../utils/helpers";
import { FILTER } from "../../utils/constant";

export class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], isModalOpen: false, isFiltered: FILTER[0] };
  }

  setList = (newList) => {
    this.setState((prev) => ({ ...prev, list: [...newList] }));
  };

  setIsModalOpen = (options) => {
    this.setState((prev) => ({ ...prev, isModalOpen: options }));
  };

  setIsFiltered = (value) => {
    this.setState((prev) => ({ ...prev, isFiltered: value }));
  };

  changeFilterHandler = () => {
    let filterIdx = FILTER.findIndex(
      (i) => i.type === this.state.isFiltered.type
    );
    if (filterIdx !== -1) {
      if (filterIdx === FILTER.length - 1) filterIdx = -1;
      this.setIsFiltered(FILTER[filterIdx + 1]);
    }
  };

  removeHandler = (id) => {
    if (!!this.state.list.length) {
      const idxList = this.state.list.findIndex((el) => {
        return el.id === id;
      });
      if (idxList !== -1) {
        this.setState((prev) => ({
          ...prev,
          list: [
            ...prev.list.slice(0, idxList),
            ...prev.list.slice(idxList + 1),
          ],
        }));
      }
    }
  };

  renameHandler = (id) => {
    if (!!this.state.list.length) {
      const idxList = this.state.list.findIndex((el) => {
        return el.id === id;
      });
      if (idxList !== -1) {
        this.setState((prev) => ({
          ...prev,
          isModalOpen: {
            value: this.state.list[idxList].title,
            id: this.state.list[idxList].id,
          },
        }));
      }
    }
  };

  changeTaskName = ({ value, id }) => {
    if (!!this.state.list.length) {
      const idxList = this.state.list.findIndex((el) => {
        return el.id === id;
      });
      if (idxList !== -1) {
        if (idxList !== -1) {
          this.setState((prev) => ({
            ...prev,
            list: [
              ...prev.list.slice(0, idxList),
              { ...prev.list[idxList], title: value },
              ...prev.list.slice(idxList + 1),
            ],
          }));
        }
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
          ...prev,
          list: [
            ...prev.list.slice(0, idxList),
            { ...prev.list[idxList], isDone: !prev.list[idxList].isDone },
            ...prev.list.slice(idxList + 1),
          ],
        }));
      }
    }
  };
  createHandler = ({ value }) => {
    const newTask = {
      title: value,
      id: uuidv4(),
      isDone: false,
    };
    this.setState((prev) => ({
      ...prev,
      list: [...prev.list, newTask],
    }));
  };

  componentDidMount() {
    if (!this.state.list.length) {
      this.setList(list);
    }
    const parsedList = JSON.parse(localStorage.getItem("list"));
    if (parsedList) this.setState((prev) => ({ ...prev, list: parsedList }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.list !== prevState.list) {
      localStorage.setItem("list", JSON.stringify(this.state.list));
    }
  }

  render() {
    const { list, isModalOpen, isFiltered } = this.state;
    const actions = {
      onRemove: this.removeHandler,
      onRename: this.renameHandler,
      onComplete: this.completeHandler,
    };
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper__panel}>
          <ToDoHeader
            title={isFiltered.title}
            openModal={this.setIsModalOpen}
            onChangeFilter={this.changeFilterHandler}
          />
          <ToDoList
            toDoList={filterList(list, isFiltered.type)}
            actions={actions}
          />
        </div>
        {isModalOpen && (
          <Modal onHandleClose={this.setIsModalOpen}>
            <InputForm
              onCreate={this.createHandler}
              onChange={this.changeTaskName}
              options={isModalOpen}
            />
          </Modal>
        )}
      </div>
    );
  }
}
