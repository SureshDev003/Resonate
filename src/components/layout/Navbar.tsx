import { Home, Bot, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../../lib/utils';

const navItems = [
  { icon: Home, label: 'Home', to: '/' },
  { icon: Bot, label: 'AI Bot', to: '/aibot' },
  { icon: User, label: 'Profile', to: '/profile' },
];

export function Navbar() {
  return (
    <nav className="flex-1 bg-white border-b border-gray-200">
      <div className="h-full flex items-center justify-end px-4 gap-4">
        {navItems.map(({ icon: Icon, label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600',
                isActive && 'text-blue-600'
              )
            }
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}