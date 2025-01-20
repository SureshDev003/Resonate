import { Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 w-64 flex items-center px-4">
      <div className="flex items-center gap-2">
        <Layout className="h-6 w-6" />
        <Link to="/" className="text-xl font-bold">
          Resonate
        </Link>
      </div>
    </header>
  );
}