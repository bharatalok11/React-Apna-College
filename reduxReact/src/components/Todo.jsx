import { useSelector } from 'react-redux';
import AddForm from './AddForm';
export default function Todo() {
    const todos = useSelector((state)=>state.todos);
    console.log(todos);
    return (
        <div >
            <AddForm />
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>{todos.task}</li>
                    ))
                }
            </ul>
        </div>
    );
}