import App from "../App"

interface TodoFormProps {
    newTodo: string;
    setNewTodo: (text: string) => void;
    addTodo: () => void;
}

export default function TodoForm({ newTodo, setNewTodo, addTodo }: TodoFormProps){
    return(
        <div className="flex space-x-2 mb-4">
            <input 
                type="text" 
                placeholder="Add new Todo" 
                value={newTodo} 
                onChange={(e) => setNewTodo(e.target.value)}
                className="border p-2 flex-grow rounded"
            />
            <button 
                onClick={addTodo}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Todo
            </button>
        </div>
    )
}