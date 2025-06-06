// reducers
import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos : [{
        id : "abc",
        task : "demo-task",
        isDone : false
    }]
};

export const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        addTodo : (state,action)=>{ 
           const newTodo = {
                id : nanoid(),
                task : action.payload,
                isDone : false 
           };
           state.todos.push(newTodo);
        },
        deleteToDo : (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id != action.payload);
        },
        markAsDone : (state,action)=>{
            state.todos = state.todos.map((todo)=>{
                return todo.id === action.payload ? { ...todo, isDone: true } : todo
            });
        }
    }
})

// Action creators are generated for each case reducer function
export const {addTodo,deleteToDo,markAsDone} = todoSlice.actions;
export default todoSlice.reducer;