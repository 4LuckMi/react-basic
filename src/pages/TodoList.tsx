import { useState } from "react";

interface Todo{
    id: number;
    text: string;
    completed: boolean;
}

export default function TodoList(){
    
    const [todos, setTodos] = useState<Todo[]>([
        {id: 1, text: 'Learn React', completed: true},
        {id: 2, text: 'build Project', completed: false}
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    function addTodo() {
        setTodos([...todos, {id: todos.length + 1, text: newTodo, completed: false}])
        setNewTodo('');
    }

    function deleteTodo(id: number) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function updateTask(id: number) {
        setTodos(todos.map((td) => td.id === id ? {...td, completed: !td.completed} : td
    ))
    }

    function changeTask(text: string){
        setTodos(todos.map((td) => td.id === td.id ? {...td, text: text} : td));
    }


    return(
        <>
        <div>
            <h3 className="text-xl font-bold mb-4">Todo List</h3>
            {/* Form Todo */}
            <input type="text" placeholder="Add new Todo"  value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
            <button onClick={addTodo}>Add todo</button>
        </div>

        {/* Menampilkan List */}
        <ul className="space-y-2">
            {todos.map(todo => (
                <li key={todo.id}>{todo.text} - {String(todo.completed)} - <button onClick={() => deleteTodo(todo.id)}>Detele</button> - <input type="checkbox" onClick={() => updateTask(todo.id)}/></li>
            ))}
        </ul>
        </>
    )
}