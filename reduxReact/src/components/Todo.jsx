import { useSelector,useDispatch } from 'react-redux';
import AddForm from './AddForm';
import { deleteToDo, markAsDone } from '../features/todo/todoSlice';
export default function Todo() {
    const todos = useSelector((state)=>state.todos);
    const dispatch = useDispatch();
    // console.log(todos);

    const handleDelete = (id)=>{
        dispatch(deleteToDo(id));
    }
    const handleMarkAsDone = (id)=>{
        dispatch(markAsDone(id));
    }
    return (
        <div >
            <AddForm />
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <span  style={todo.isDone ? {textDecoration: 'line-through',color:'red'} : {}}>{todo.task} &nbsp; &nbsp;</span>
                            
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={()=> handleDelete(todo.id)}>Delete</button>
                            &nbsp; &nbsp;&nbsp;
                            <button onClick={()=> handleMarkAsDone(todo.id)}>{todo.isDone ? 'Done' : 'Mark Done'}</button>
                        
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}