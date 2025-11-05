import Checkbox from "./CheckBox";
import Delete from "./Detele";
import type { Todo } from '../App';

interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: number) => void;
    updateTask: (id: number) => void;
}

export default function TodoList({ todos, deleteTodo, updateTask }: TodoListProps){
    return(
    
    <ul className="space-y-3">
            {todos.map(todo => (
                <li 
                    key={todo.id}
                    className={`flex items-center justify-between p-3 border rounded shadow-sm ${todo.completed ? "complete": todo}`}
                >
                    <span className="flex-grow">
                        {todo.text} - {todo.completed}
                    </span>
                    
                    <div className="flex space-x-3 items-center">
                        <Checkbox 
                            todoId={todo.id}
                            completed={todo.completed}
                            updateTask={updateTask}
                        />
                        <Delete
                            todoId={todo.id} 
                            deleteTodo={deleteTodo} 
                        />
                    </div>
                </li>
            ))}
            {!todos.length && (
                <p className="text-gray-500 text-center italic">No todos yet. Add one!</p>
            )}
        </ul>
    );
}