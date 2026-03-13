import { useQuery } from '@tanstack/react-query';
import { postAPI } from '../services/api';
import PostCard from '../components/post/PostCard';
import CreatePost from '../components/post/CreatePost';

const Home = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => postAPI.getPosts()
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error loading posts: {error.message}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <CreatePost />
      
      <div className="mt-6 space-y-4">
        {data?.data?.posts?.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
