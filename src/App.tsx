import { HeaderTodo } from './components/HeaderTodo';
import { AddTodo } from './components/AddTodo';
import { ItemTodo } from './components/ItemTodo';
import styles from './App.module.css';
import { useTodoList } from './reducers/todo';

function App() {
  const [todoList, dispatch] = useTodoList();

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
      </div>
    </div>
  )
}

export default App