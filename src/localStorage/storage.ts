import { todoItems } from '../reducers/todo';

export const readLocalStorage = (initialValue: todoItems[]) => JSON.parse(localStorage.getItem('saved') as string) || initialValue;

export const writeLocalStorage = (item: todoItems[]) => {
    window.localStorage.setItem('saved', JSON.stringify(item));
}