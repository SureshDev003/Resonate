import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Plus, Check, Trash } from 'lucide-react';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export function Todo() {
  const { listId } = useParams();
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        { id: Date.now().toString(), text: newTodo, completed: false },
      ]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            placeholder="Add a new todo"
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={addTodo}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" />
            Add
          </button>
        </div>
      </div>

      <div className="space-y-2">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-2 bg-white p-4 rounded-lg shadow"
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 ${
                todo.completed
                  ? 'bg-green-500 border-green-500'
                  : 'border-gray-300'
              } flex items-center justify-center`}
            >
              {todo.completed && <Check className="h-4 w-4 text-white" />}
            </button>
            <span
              className={`flex-1 ${
                todo.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-gray-500 hover:text-red-500"
            >
              <Trash className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}