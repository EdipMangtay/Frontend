import { useState } from "react";
import TaskList from "./TaskList";
import { v4 as uuidv4 } from 'uuid';

export default function TaskForm() {
    const emptyForm = { task: "", priority: false };
    const [formData, setFormData] = useState(emptyForm);
    const [tasks, setTasks] = useState([]);
    const [isEdited, setIsEdited] = useState(false);

    function removeTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    function editTask(id) {
        const task = tasks.find(item => item.id === id);
        setFormData(task);
        setIsEdited(true);
    }

    function handleInputChange(event) {
        const { name, type, checked, value } = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        if (isEdited) {
            const taskIndex = tasks.findIndex(item => item.id === formData.id);
            const newTasks = [...tasks];
            newTasks[taskIndex] = formData;
            setTasks(newTasks);
            setIsEdited(false);
        } else if (formData.task.length > 3) {
            const newTask = { ...formData, id: uuidv4() };
            setTasks(prev => [newTask, ...prev]);
        }
        setFormData(emptyForm);
        event.target.reset();
    }

    return (
        <>
            <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
            <form onSubmit={handleFormSubmit}>
                <div className="row mb-3">
                    <label htmlFor="task" className="col-sm-2 col-form-label">Task</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="task" name="task"
                            value={formData.task}
                            onChange={handleInputChange} />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="priority" name="priority"
                                checked={formData.priority}
                                onChange={handleInputChange} />
                            <label className="form-check-label" htmlFor="priority">
                                Öncelikli
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Kaydet</button>
            </form>
        </>
    );
}