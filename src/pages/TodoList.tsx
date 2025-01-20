import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, List } from 'lucide-react';

interface TodoList {
  id: string;
  title: string;
  description: string;
}

export function TodoList() {
  const [lists, setLists] = useState<TodoList[]>([]);
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [newList, setNewList] = useState({ title: '', description: '' });

  const handleCreateList = () => {
    if (newList.title.trim()) {
      setLists([
        ...lists,
        {
          id: Date.now().toString(),
          title: newList.title,
          description: newList.description,
        },
      ]);
      setNewList({ title: '', description: '' });
      setShowNewListForm(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Todo Lists</h1>
        <button
          onClick={() => setShowNewListForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus className="h-5 w-5" />
          New List
        </button>
      </div>

      {showNewListForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Create New List</h2>
            <input
              type="text"
              placeholder="List Title"
              value={newList.title}
              onChange={(e) =>
                setNewList({ ...newList, title: e.target.value })
              }
              className="w-full p-2 border rounded mb-4"
            />
            <textarea
              placeholder="Description"
              value={newList.description}
              onChange={(e) =>
                setNewList({ ...newList, description: e.target.value })
              }
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowNewListForm(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateList}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lists.map((list) => (
          <Link
            key={list.id}
            to={`/todo/${list.id}`}
            className="block bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2 mb-2">
              <List className="h-5 w-5 text-gray-500" />
              <h3 className="font-semibold">{list.title}</h3>
            </div>
            <p className="text-gray-600">{list.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}