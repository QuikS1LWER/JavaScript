const todo = {
  list: {"create a new practice task": "In Progress", "make a bed": "Done","write a post": "To Do",},
  showList() {
    console.log(this.list);
  },
  deleteTask(task) {
    delete this.list[task];
  },
  changeStatus(task, status) {
    if (!(task in this.list)) {
      console.log("task not exist")
    } else {
      this.list[task] = status;
    };
  },
  addTask(task) {
    if (task in this.list) {
      console.log("This task already exist")
    } else if (task.length > 50) {
      console.log("Task name is to long")
    } else {
      this.list[task] = "To Do";
    };
  }
};

todo.addTask("pak staf");
todo.changeStatus("write a post", "Done");
todo.deleteTask("make a bed");
todo.showList();