import { useState } from "react";

const InputForm = ({ handleNewTodo }) => {

  const [todo, setTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    handleNewTodo(todo)
  }
  
  return (
    <div class='w-full h-1/5 flex flex-col justify-center items-center'>     
      <form onSubmit={ handleSubmit } className='w-7/12 h-full mx-auto flex justify-center items-center space-x-3'>
        <input type="text" value={todo} placeholder='Add todo here' onChange={ (e) => setTodo(e.target.value) } required className='w-3/4 h-2/4 rounded-lg border-2 border-gray-300 text-center focus:outline-none'/>
        <input type="submit" className='w-28 h-2/4 bg-indigo-600 text-white rounded-lg' value='Add Todo'/>
      </form>   
    </div>
  );
}
 
export default InputForm;