const container = document.getElementById("container");
const taskContainer = document.getElementById("taskContainer");
const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");


addTask.addEventListener("click", function () {

  let task = document.createElement("div");
  task.classList.add("task");


  let li = document.createElement("li");
  li.textContent = taskInput.value;
  task.appendChild(li);

  let check = document.createElement("button");
  check.classList.add("check")
  check.innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
  task.appendChild(check);

  let trash = document.createElement("button");
  trash.classList.add("trash")
  trash.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
  task.appendChild(trash);

  if (taskInput.value == "") {
    alert("Please Enter a Task");
  }else {
    container.appendChild(task);
  }
  taskInput.value = ""
  check.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });

  trash.addEventListener("click", function () {
    task.remove(); 
  });
}
);
