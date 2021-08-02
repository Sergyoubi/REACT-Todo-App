import { useState } from "react";
import InputForm from './InputForm';


const TodoList = () => {

  const [todos, setTodos] = useState([
    
    { id: 1, content: 'Todo 1', isDone: false },
    { id: 2, content: 'Todo 2', isDone: false },
    { id: 3, content: 'Todo 3', isDone: false },
    { id: 4, content: 'Todo 4', isDone: false }
    
  ]);
  
  const handleNewTodo = (newTodo) => {
    const newTodos = [...todos, { id: Date.now(), content: newTodo, isDone: false }]; //todos.length + 1
    setTodos(newTodos)
    console.log(newTodos)
  };
  const handleDeleteClick = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos);
  };
  const markTodo = (id) => { 
    //console.log(id)
    
    const index = todos.findIndex(item => item.id === id);
    todos[index].isDone = !todos[index].isDone 
    const newTodos = [...todos]
    setTodos(newTodos) 
     
  };


  return (
    <div className='w-full h-5/6'>   
      <div className='w-8/12 h-full mx-auto'>
        <InputForm handleNewTodo={ handleNewTodo }/>
        {todos.map((todo) => (
          <div className='w-7/12  bg-blue-50 p-3 my-4 mx-auto flex justify-between items-center' key={todo.id}>
            <div className='w-2/4 flex justify-between items-center'>
              <input onClick={() => {markTodo(todo.id)}} type="checkbox"/>
              <p className={todo.isDone ? "markTodo" : ""}>{ todo.content }</p> 
            </div>
            <button onClick={ () => {handleDeleteClick(todo.id)} } className='px-3 py-2 bg-blue-300 text-white rounded-lg'>Delete</button>
          </div>        
        ))}
      </div>
    </div>
  );
}
 
export default TodoList; 