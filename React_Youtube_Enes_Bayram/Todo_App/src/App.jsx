import { useState } from 'react'

import './App.css'
import TodoCreate from './components/TodoCreate'
import Todo from './components/Todo'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([])

  const createTodo =(newTodo) =>{
    setTodos([...todos,newTodo])
  }

  const removeTodo = (id) => {
    // const extracttedArray = todos.filter((todo) => todo.id !== id) // filter methodu ile silinmek istenen id dışındaki id'ler yeni bir array'e atılır.
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  }

  const updateTodo = (newTodo) => {
    
    const updatedTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return  newTodo;
    })
    setTodos([...updatedTodos]);
  }

  console.log(todos)
  
  return (
    <div className='App'>
      <div className='main'>
         <TodoCreate onCreateTodo = {createTodo}/>
         <TodoList todos ={todos} onRemoveTodo = {removeTodo} onUpdateTodo ={updateTodo}/>
      </div>
     
    </div>
  )
}

export default App
