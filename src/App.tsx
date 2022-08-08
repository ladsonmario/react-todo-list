import styles from './App.module.css';
import { useEffect } from 'react';
import { HeaderTodo } from './components/HeaderTodo';
import { AddTodo } from './components/AddTodo';
import { ItemTodo } from './components/ItemTodo';
import { Footer } from './components/Footer';
import { useTodoList } from './reducers/todo';
import { writeLocalStorage } from './localStorage/storage';

function App() {  
  const [todoList, dispatch] = useTodoList(); 

  useEffect(() => {
    writeLocalStorage(todoList);
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