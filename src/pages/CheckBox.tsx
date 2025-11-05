interface CheckboxProps {
    todoId: number;
    completed: boolean;
    updateTask: (id: number) => void;
}

export default function Checkbox({ todoId, completed, updateTask }: CheckboxProps) {
    return (
        <input 
            type="checkbox" 
            checked={completed}
            onChange={() => updateTask(todoId)}
            className="form-checkbox h-5 w-5 text-blue-600"
            title="Update Status"
        />
    );
}