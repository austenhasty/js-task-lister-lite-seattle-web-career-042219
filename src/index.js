document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const tasks = document.getElementById('tasks');
  const newTaskDescription = document.getElementById('new-task-description');
  const priority = document.getElementById('priority')

  form.addEventListener('submit', addTask)


  function addTask(event) {
    event.preventDefault()
    console.log("adding task")
    const newTaskDescription = document.getElementById('new-task-description');
    const newTask = document.createElement('li');
    const deleteBtn = document.createElement('button')
    newTask.innerText = newTaskDescription.value;
    deleteBtn.innerText = 'X'
    tasks.appendChild(newTask)
    newTask.appendChild(deleteBtn)
    setPriority(newTask)
    resetValue()

    deleteBtn.addEventListener('click', () => {
      tasks.removeChild(newTask)
    })
  }

  function setPriority(newTask) {
    console.log(priority.value)
    if (priority.value === 'High') {
      newTask.style.color = 'red'
    } else if (priority.value === 'Medium') {
        newTask.style.color === 'yellow'
    } else if (priority.value === 'Low') {
        newTask.style.color === 'green'
    } else {
      window.alert('Please select a task priority level!')
    }
  }

  function resetValue() {
    newTaskDescription.value = ''
  }

});
