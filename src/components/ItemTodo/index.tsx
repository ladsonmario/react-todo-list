import styles from './ItemTodo.module.css';
import { todoItems } from '../../reducers/todo';

type Props = {
    data: todoItems[];
    onDelete: (id: string) => void;
}

export const ItemTodo = ({ data, onDelete }: Props) => {
    return (
        <div className={styles.list}>
            {data.map((item, index) => (
                <ul>
                    <li key={index}>
                        <div>
                            <h3>{item.title} <small>{item.date.toString()}</small></h3>
                            <button>DELETE</button>
                        </div>
                        
                        <p>{item.description}</p>                        
                    </li>
                </ul>
            ))}
        </div>
    );
}