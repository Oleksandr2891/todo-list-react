class ToDo {
  constructor(list = []) {
    this.list = list;
  }
  get() {
    return this.list;
  }
  set(newList) {
    return (this.list = newList);
  }
}

const ServicesToDo = new ToDo();
export default ServicesToDo;
