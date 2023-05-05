const task = document.querySelector('#task');
const addTaskBtn = document.querySelector("#addTask");
const clearTasksBtn = document.querySelector("#clearTasks");
const tasksArea = document.querySelector('#tasks');

addTask.addEventListener("click",addTaskHandler);
clearTasksBtn.addEventListener("click",clearTasksHandler);


function addTaskHandler(){
    const taskText = task.value
    tasksArea.value += taskText + '\n'
    localStorage.setItem("tasks", tasksArea.value)
}

function clearTasksHandler(){
    tasksArea.value = "";
    localStorage.clear()
}

window.onload = function() {
    var storedData = localStorage.getItem("tasks");
    if (storedData) {
        tasksArea.value = storedData
    }
  }