import { Book, BookOpen } from 'lucide-react';
import { useState } from 'react';

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  description: string;
}

export function Library() {
  const [books] = useState<Book[]>([
    {
      id: '1',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      cover: 'https://source.unsplash.com/300x400/?book,classic',
      description: 'A story of decadence and excess...',
    },
    {
      id: '2',
      title: '1984',
      author: 'George Orwell',
      cover: 'https://source.unsplash.com/300x400/?book,dystopia',
      description: 'A dystopian social science fiction...',
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <Book className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Library</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-5 w-5 text-blue-600" />
                <h3 className="font-semibold">{book.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
              <p className="text-gray-700">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}