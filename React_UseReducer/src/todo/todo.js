import { ADD_TODO, RESET, REMOVE_TODO } from "./actionType";
import {v4 as uuidv4} from "uuid";

export const initial = {
    todos: [],   // Array formatında todo listesi
    todo: ''     // Yeni bir todo eklemek için kullanılacak string
};

export const todoReducer = (state, action) => 
{
    switch(action.type) {
        case ADD_TODO:
            if (action.payload && action.payload.trim() !== "") {
                return { 
                    ...state, 
                    todos: [...state.todos, { id: uuidv4(), title: action.payload }]
                  };            } else {
                console.log("Boş todo eklenemez!");
                return state;
            }
        case REMOVE_TODO:
            // Burada todos listesinden belirli bir index veya todo'yu çıkarabilirsiniz
            return {
                ...state,
                todos: state.todos.filter((todo, index) => index !== action.payload)
            };
        case RESET:
            console.log("Liste sıfırlandı:", state);
            return initial;
        default:
            console.log("Geçersiz işlem...");
            return state;
    }
};