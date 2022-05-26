import {useState} from 'react'
import Todo from './todo'
import NewTodoForm from './NewTodoForm'
import {v4 as uuid} from "uuid"
import "./todoList.css"


function TodoList() {
    const INITIAL_VALUES = [
        {
        id:uuid(),
        todo: "feed Dog"
        },
        {
            id:uuid(),
            todo: "brush cat"
        }
    ]
    

    const [todos, setTodos] = useState(INITIAL_VALUES)

    //Removes a todo by id
    const removeTodo = (id) =>{
        const todosCopy = [...todos]
        setTodos(todosCopy.filter(todo=>todo.id!==id))
    }

    const createTodo = (data) =>{
        const todo = {
            id:uuid(),
            todo:data
        }
        setTodos([...todos,todo])
        
    }

   

    return (
        <><NewTodoForm createTodo={createTodo}/>
      <div className='todoList'>
          {todos.map(todo=>{return(
              <Todo 
              key={todo.id}
              id={todo.id}
              todo={todo.todo}
              removeTodo={removeTodo}
               />
          )})}
      </div>
      </>
    );
  }
  
  export default TodoList;
  