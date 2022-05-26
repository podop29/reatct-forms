import "./todo.css"


function Todo({id,todo, removeTodo}) {
    
    return (
      <div className='todo'>
          <h3>{todo}</h3>
          <button onClick={()=>removeTodo(id)}>X</button>
      </div>
    );
  }
  
  export default Todo;
  