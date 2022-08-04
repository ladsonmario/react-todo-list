import styles from './HeaderTodo.module.css';

type Props = {
  onOrder: () => void;
}

export const HeaderTodo = ({ onOrder }: Props) => {
    const handleButtonOrder = () => {
      onOrder();
    }

    return (
        <div className={styles.headerTodo}>
          <h1>📄 To-do List</h1>
          <button onClick={handleButtonOrder}>Order by Date</button>
        </div>
    );
}