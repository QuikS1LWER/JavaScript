const list = {
  "create a new practice task": "In Progress", 
  "make a bed": "Done",
  "write a post": "To Do",
};

function addTask(task) {
  list[task] = "To Do";
}

function changeStatus(task, status) {
  list[task] = status;
}

function deleteTask(task) {
  delete list[task];
}

function showList() {
  console.log(list);
};

addTask("pak staff");
changeStatus("write a post", "Done");
deleteTask("make a bed")
showList();