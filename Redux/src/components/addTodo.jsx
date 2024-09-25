import { useDispatch } from "react-redux";
import { add } from "../store/todo/todoSlice";

export default function AddTodo() {

    const dispatch = useDispatch();
    
    function handleSubmit(e) {
        e.preventDefault();
        const inputValue =e.target.elements[0].value;
        dispatch(add(inputValue)); // add fonksiyonu bir action creator
        e.target.reset();
    }
    return  <>

        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder="todo bilgisini gir" />
            <button type="submit">Ekle</button>
        </form>
    </>
}