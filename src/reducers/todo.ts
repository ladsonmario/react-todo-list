import { useReducer } from 'react';
import { v4 } from 'uuid';
import { writeLocalStore } from '../storage/LocalStore';

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
                copyState.push({ 
                    id: v4(), 
                    date: new Date(), 
                    title: action.payload?.title, 
                    description: action.payload?.description 
                });                
                writeLocalStore(copyState);
                return copyState;
            }
        break;
        case 'DEL':
            if(action.payload?.id) {
                let copyState = [...state];
                copyState = copyState.filter(item => item.id !== action.payload?.id);                                
                writeLocalStore(copyState);
                return copyState;
            }
        break;
        case 'ORDER': 
            let copyState = [...state];
            copyState = copyState.sort((a, b) => (a.date > b.date) ? -1 : 1);                       
            writeLocalStore(copyState);
            return copyState;
        break;        
    }

    return state;
}

export const useTodoList = () => {
    return useReducer(reducer, initialState);
}