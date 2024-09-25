import { useReducer } from "react";
import { ADD_TODO, initial, todoReducer } from "./todo";

export default function AddTodo() {

    const [state, dispatch] = useReducer(todoReducer, initial);
    console.log(state, dispatch);

    function handleSubmit(e) {
        e.preventDefault();
        // Hata burada: e.target.elements[0] kullanılmalı
        const inputValue = e.target.elements[0].value;
        dispatch({ type: ADD_TODO, payload: inputValue });
        e.target.reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="todo-bilgisini-giriniz" />
                <button type="submit">Ekle</button>
            </form>
            {state.todos.map((todo, index) => (
                <div key={index}>
                    {todo}
                    <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: index })}>Sil</button>
                </div>
            ))}
            {JSON.stringify(state)}
        </>
    );
}