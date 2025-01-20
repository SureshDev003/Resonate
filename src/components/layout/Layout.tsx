import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function Layout() {
  const location = useLocation();
  const navbarPaths = ['/aibot', '/profile'];
  const showSidebar = !navbarPaths.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-16 fixed top-0 left-0 right-0 z-50">
        <Header />
        <Navbar />
      </div>
      <div className="flex pt-16">
        {showSidebar && <Sidebar />}
        <main className={`flex-1 p-4 ${showSidebar ? 'ml-64' : ''}`}>
          <div className="container mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}