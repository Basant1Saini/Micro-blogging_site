import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { userAPI } from '../services/api';
import { Search } from 'lucide-react';

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: users, isLoading } = useQuery({
    queryKey: ['searchUsers', searchQuery],
    queryFn: () => userAPI.searchUsers(searchQuery),
    enabled: searchQuery.length > 0
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold mb-4">Explore</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {isLoading && (
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        )}

        <div className="mt-6 space-y-4">
          {users?.data?.map((user) => (
            <div key={user._id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src={user.profilePicture || 'https://via.placeholder.com/50'}
                  alt={user.fullName}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{user.fullName}</p>
                  <p className="text-sm text-gray-600">@{user.username}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
