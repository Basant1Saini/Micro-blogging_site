import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { formatDistanceToNow } from 'date-fns';

const PostCard = ({ post }) => {
  const queryClient = useQueryClient();

  const likeMutation = useMutation({
    mutationFn: (postId) => postAPI.likePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      toast.success('Post liked!');
    }
  });

  const handleLike = () => {
    likeMutation.mutate(post._id);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-start space-x-3">
        <img
          src={post.user?.profilePicture || 'https://via.placeholder.com/50'}
          alt={post.user?.fullName}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{post.user?.fullName}</span>
            <span className="text-gray-500 text-sm">@{post.user?.username}</span>
            <span className="text-gray-500 text-sm">
              · {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </span>
          </div>
          
          <p className="mt-2 text-gray-800">{post.content}</p>
          
          {post.images && post.images.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-2">
              {post.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Post"
                  className="rounded-lg w-full h-48 object-cover"
                />
              ))}
            </div>
          )}

          <div className="flex items-center space-x-6 mt-4 text-gray-500">
            <button
              onClick={handleLike}
              className="flex items-center space-x-2 hover:text-red-500"
            >
              <Heart className="w-5 h-5" />
              <span>{post.likes?.length || 0}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <MessageCircle className="w-5 h-5" />
              <span>{post.comments?.length || 0}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-500">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
