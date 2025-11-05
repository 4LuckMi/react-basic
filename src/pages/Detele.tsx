interface DeleteButtonProps {
    todoId: number;
    deleteTodo: (id: number) => void;
}
export default function Delete({ todoId, deleteTodo }: DeleteButtonProps) {
    return (
        <button 
            onClick={() => deleteTodo(todoId)}
            className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-1 px-3 rounded"
        >
            Delete
        </button>
    );
}