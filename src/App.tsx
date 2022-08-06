import { HeaderTodo } from './components/HeaderTodo';
import { AddTodo } from './components/AddTodo';
import { ItemTodo } from './components/ItemTodo';
import { Footer } from './components/Footer';
import styles from './App.module.css';
import { useTodoList } from './reducers/todo';
import { useEffect } from 'react';

function App() {  
  const [todoList, dispatch] = useTodoList(); 

  useEffect(() => {
    window.localStorage.setItem('saved', JSON.stringify(todoList));    
  }, [todoList]);

  const addTodo = (title: string, description: string) => {
    dispatch({
      type: 'ADD',
      payload: { title, description }
    });        
  }

  const deleteTodo = (id: string) => {
    dispatch({
      type: 'DEL',
      payload: { id }
    });    
  }

  const orderTodo = () => {
    dispatch({ type: 'ORDER' });    
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerTodo}>
        <HeaderTodo onOrder={orderTodo} />
        <AddTodo onAdd={addTodo} />
        <ItemTodo data={todoList} onDelete={deleteTodo} />
        <Footer />
      </div>
    </div>
  )
}

export default App