import { useReducer } from 'react';
import { v4 } from 'uuid';

export type todoItems = {    
    id: string;
    date: Date;
    title: string;
    description: string;
}

type ActionType = {
    type: string;
    payload?: {
        id?: string;
        title?: string;
        description?: string;
    }
}

const initialState: todoItems[] = [];

const reducer = (state: todoItems[], action: ActionType) => {
    switch(action.type) {
        case 'ADD': 
            if(action.payload?.title && action.payload?.description) {
                const copyState = [...state];
                copyState.push({id: v4(), date: new Date(), title: action.payload?.title, description: action.payload?.description});
                return copyState;
            }
        break;
        case 'DEL':
            if(action.payload?.id) {
                let copyState = [...state];
                copyState = copyState.filter(item => item.id !== action.payload?.id);
                return copyState;
            }
        break;
        case 'ORDER': 
            let copyState = [...state];
            copyState = copyState.sort((a, b) => (a.date > b.date) ? 1 : -1);
            return copyState;
        break;
        case 'EDIT':            
            if(action.payload?.title) {
                let copyState = [...state];
                copyState = copyState.filter(item => item.title = action.payload?.title as string);                
                return copyState;
            }
            if(action.payload?.description) {
                let copyState = [...state];
                copyState = copyState.filter(item => item.description = action.payload?.description as string);                
                return copyState;
            }            
        break;
    }

    return state;
}

export const useTodoList = () => {
    return useReducer(reducer, initialState);
}