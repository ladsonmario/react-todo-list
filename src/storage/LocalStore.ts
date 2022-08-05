import { todoItems } from '../reducers/todo';

export const readLocalStore = (item: todoItems[]) => {
    if(!window.localStorage) {
        return;
    }

    let savedFromLocalStore = window.localStorage.getItem('saved');

    if(savedFromLocalStore) {
         item = JSON.parse(savedFromLocalStore);
    }
}

export const writeLocalStore = (item: todoItems[]) => {
    window.localStorage.setItem('saved', JSON.stringify(item));
}