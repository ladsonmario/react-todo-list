import styles from './ItemTodo.module.css';
import { todoItems } from '../../reducers/todo';

type Props = {
    data: todoItems[];
    onDelete: (id: string) => void;
}

export const ItemTodo = ({ data, onDelete }: Props) => {
    const handleDeleteClick = (id: string) => {
        onDelete(id);
    }

    return (
        <div className={styles.list}>
            {data.map((item, index) => (
                <ul>
                    <li key={index}>
                        <div>
                            <small>{item.date.toString()}</small>
                            <button onClick={() => handleDeleteClick(item.id)}>DELETE</button>
                        </div>                        
                        <h3>{item.title}</h3>   
                        <p>{item.description}</p>                       
                    </li>
                </ul>
            ))}
        </div>
    );
}