export const filterList = (list, type) => {
  if (list.length) {
    switch (type) {
      case "isDone":
        return list.filter((item) => item.isDone);
      case "inProces":
        return list.filter((item) => !item.isDone);

      default:
        return list;
    }
  } else {
    return list;
  }
};
