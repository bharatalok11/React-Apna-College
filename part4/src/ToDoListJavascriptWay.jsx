function ToDoListJavascriptWay() {
  function handleClick(event) {
    // Get input value
    const input = document.querySelector("input[name='task']");
    const task = input.value.trim();

    // Don't add empty tasks
    if (task === "") return;

    // Create a new <li> element
    const listItem = document.createElement("li");
    listItem.textContent = task;

    // Append to the list
    const addList = document.getElementById("taskList");
    addList.appendChild(listItem);

    // Clear input box
    input.value = "";
  }

  return (
    <div>
      <h1>To Do List</h1>

      <input type="text" name="task" placeholder="Enter a task" />
      &nbsp; &nbsp; &nbsp;
      <button onClick={handleClick}>Add</button>

      <hr />
      <h3>Tasks to do : ⤵️</h3>
      <ul id="taskList"></ul>
    </div>
  );
}