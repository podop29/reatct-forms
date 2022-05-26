import {useState} from 'react'
function NewTodoForm({createTodo}) {
    const INITIAL_STATE={
        todo:""
    }

    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setFormData(formData =>({
            ...formData,
            [name]:value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        createTodo(formData.todo)
        setFormData(INITIAL_STATE)

    }
        return (
        <div className='todoList'>
            <form>
            <input type="text"
                name="todo"
                placeholder='Enter Task'
                value={formData.todo}
                onChange={handleChange}
                />
                <button onClick={handleSubmit}>Add todo</button>
            </form>
            
        </div>
        );
  }
  
  export default NewTodoForm;
  