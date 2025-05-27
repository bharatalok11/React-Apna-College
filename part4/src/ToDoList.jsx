import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    let [todos, setTodos] = useState([]);
    let [task,setTask] = useState('');
    let [editId, setEditId] = useState(null);

    function updateToDoValue(event){
        setTask(event.target.value);
        // console.log(`task : ${task}`);
    }

    function handleTaskAdd(event) {
        if(task.trim() === "") return;
        if(editId === null){
            let newTask = {
                id : uuidv4(),
                work : task
            };
            setTodos(prevList=> [...prevList,newTask]);
        }else{
            //editing existing task
            setTodos(prevList =>
                prevList.map(item =>
                    item.id === editId ? { ...item, work: task } : item
                )
            );
            setEditId(null);
        }
        setTask("");
    }

    function deleteTask(idToDelete){
        setTodos(prevList=> prevList.filter((item) => item.id!=idToDelete));
        // Reset edit if you're deleting the task being edited
        if (idToDelete === editId) {
            setTask("");
            setEditId(null);
        }
    }
    function editTask(idToEdit){
        const itemToEdit = todos.find(item => item.id === idToEdit);
        setTask(itemToEdit.work);
        setEditId(idToEdit);
    }

    return (
        <div>
            <h1>To Do List</h1>

            <input onChange={updateToDoValue} placeholder="Enter a task" value={task}/>
            &nbsp; &nbsp; &nbsp;
            <button onClick={handleTaskAdd}>{editId===null ? 'Add' : 'Update'}</button>

            <hr />
            <h3>Tasks to do : ⤵️</h3>
            {todos.length === 0 ? (
                <p>No tasks yet. Add one! 😊</p>
                ) : (
                <ul>
                    {todos.map(item => (
                    <li key={item.id}>
                        {item.work} &nbsp; &nbsp;
                        <button onClick={() => editTask(item.id)}>Edit</button>
                        <button onClick={() => deleteTask(item.id)}>Delete</button>
                    </li>
                    ))}
                </ul>
            )}

        </div>
    );
}