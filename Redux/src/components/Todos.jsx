import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../store/todo/todoSlice";

export default function Todos() {
    const todos = useSelector(state => state.todos);
    console.log(todos);
    const  dispatch = useDispatch();
    

    return (
        <ul>
            {Array.isArray(todos) && todos.map((item, index) => (
                <li onClick={() => dispatch(removeTodo(index))} key={index}>{item}</li>
            ))}
        </ul>
    );
}