import { useState } from "react";

export default function ToDoList() {
    let [todos, setTodos] = useState([]);
    let [task,setTask] = useState('');
    let [editIdx, setEditIdx] = useState(null);

    function updateToDoValue(event){
        setTask(event.target.value);
        // console.log(`task : ${task}`);
    }

    function handleTaskAdd(event) {
        if(task.trim() === "") return;
        if(editIdx === null){
            setTodos(prevList=> [...prevList,task]);
        }else{
            //editing existing task
            setTodos(prevList=>{
                const updatedList = [...prevList];
                updatedList[editIdx] = task;
                return updatedList;
            });
            setEditIdx(null);
        }
        setTask("");
    }

    function deleteTask(indexToDelete){
        setTodos(prevList=> prevList.filter((_,index) => index!=indexToDelete));
        // Reset edit if you're deleting the task being edited
        if (indexToDelete === editIdx) {
            setTask("");
            setEditIdx(null);
        }
    }
    function editTask(indexToEdit){
        setTask(todos[indexToEdit]);
        setEditIdx(indexToEdit);
    }

    return (
        <div>
            <h1>To Do List</h1>

            <input onChange={updateToDoValue} placeholder="Enter a task" value={task}/>
            &nbsp; &nbsp; &nbsp;
            <button onClick={handleTaskAdd}>{editIdx===null ? 'Add' : 'Update'}</button>

            <hr />
            <h3>Tasks to do : ⤵️</h3>
            <ul >
                {
                    todos.map((item,idx)=>(
                        <li key={idx}>
                            {item} &nbsp; &nbsp; &nbsp;
                            <button onClick={() => editTask(idx)}>Edit</button>
                            <button onClick={() => deleteTask(idx)}>Delete</button>
                        </li> )
                    )
                }
            </ul>
        </div>
    );
}