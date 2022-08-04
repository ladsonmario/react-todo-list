import { useState, ChangeEvent } from 'react';
import styles from './AddTodo.module.css';

type Props = {
  onAdd: (title: string, description: string) => void;
}

export const AddTodo = ({ onAdd }: Props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [texteareaDesc, setTexteareaDesc] = useState('');

    const handleInputTitle = (e: ChangeEvent<HTMLInputElement>) => {
      setInputTitle( e.target.value );
    }

    const handleTextearea = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setTexteareaDesc( e.target.value );
    }

    const handleClickAdd = () => {
      if(inputTitle && texteareaDesc) {
        onAdd(inputTitle, texteareaDesc);
        setInputTitle('');
        setTexteareaDesc('');
      }      
    }

    return (
        <div className={styles.addTodo}>
          <input type="text" placeholder="Title To-do" value={inputTitle} onChange={handleInputTitle} />
          <textarea placeholder="Description To-do" value={texteareaDesc} onChange={handleTextearea}></textarea>
          <button onClick={handleClickAdd}>Add Todo</button>
        </div>
    );
}