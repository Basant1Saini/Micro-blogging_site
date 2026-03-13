import { Link } from 'react-router-dom';

const UserCard = ({ user, showFollowButton = false, onFollow }) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors">
      <Link to={`/profile/${user._id}`} className="flex items-center space-x-3 flex-1">
        <img
          src={user.profilePicture || 'https://via.placeholder.com/50'}
          alt={user.fullName}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900 hover:underline">{user.fullName}</p>
          <p className="text-sm text-gray-600">@{user.username}</p>
          {user.bio && <p className="text-sm text-gray-500 mt-1">{user.bio}</p>}
        </div>
      </Link>
      
      {showFollowButton && (
        <button
          onClick={() => onFollow(user._id)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Follow
        </button>
      )}
    </div>
  );
};

export default UserCard;
