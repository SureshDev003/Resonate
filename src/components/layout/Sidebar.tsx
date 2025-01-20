import { FileText, ListTodo, GamepadIcon, Video, Library, HelpCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

const sidebarItems = [
  { icon: FileText, label: 'Report', to: '/' },
  { icon: ListTodo, label: 'Todo', to: '/todo' },
  { icon: GamepadIcon, label: 'Game', to: '/game' },
  { icon: Video, label: 'Video', to: '/video' },
  { icon: Library, label: 'Library', to: '/library' },
  { icon: HelpCircle, label: 'Quiz', to: '/quiz' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white">
      <nav className="p-4">
        {sidebarItems.map(({ icon: Icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-blue-600',
                isActive && 'bg-blue-50 text-blue-600'
              )
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}