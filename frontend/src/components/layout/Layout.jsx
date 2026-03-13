import { Outlet, Link } from 'react-router-dom';
import { Home, Search, User, LogOut } from 'lucide-react';
import useAuthStore from '../../store/authStore';

const Layout = () => {
  const { user, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary-600">
                MicroBlog
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <Link to="/" className="p-2 rounded-full hover:bg-gray-100">
                <Home className="w-6 h-6" />
              </Link>
              <Link to="/explore" className="p-2 rounded-full hover:bg-gray-100">
                <Search className="w-6 h-6" />
              </Link>
              <Link to={`/profile/${user?._id}`} className="p-2 rounded-full hover:bg-gray-100">
                <User className="w-6 h-6" />
              </Link>
              <button onClick={logout} className="p-2 rounded-full hover:bg-gray-100">
                <LogOut className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
