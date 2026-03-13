import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { userAPI, postAPI } from '../services/api';
import PostCard from '../components/post/PostCard';

const Profile = () => {
  const { id } = useParams();

  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ['user', id],
    queryFn: () => userAPI.getProfile(id)
  });

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ['userPosts', id],
    queryFn: () => postAPI.getUserPosts(id)
  });

  if (userLoading || postsLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex items-center space-x-4">
          <img
            src={user?.data?.profilePicture || 'https://via.placeholder.com/100'}
            alt={user?.data?.fullName}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">{user?.data?.fullName}</h1>
            <p className="text-gray-600">@{user?.data?.username}</p>
            <p className="mt-2">{user?.data?.bio}</p>
            <div className="flex space-x-4 mt-2 text-sm text-gray-600">
              <span>{user?.data?.followers?.length || 0} Followers</span>
              <span>{user?.data?.following?.length || 0} Following</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {posts?.data?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
