import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAPI } from '../../services/api';
import toast from 'react-hot-toast';
import { Image } from 'lucide-react';
import useAuthStore from '../../store/authStore';

const CreatePost = () => {
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();
  const user = useAuthStore((state) => state.user);

  const createPostMutation = useMutation({
    mutationFn: (data) => postAPI.createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      setContent('');
      toast.success('Post created!');
    },
    onError: () => {
      toast.error('Failed to create post');
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    createPostMutation.mutate({ content });
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex space-x-3">
        <img
          src={user?.profilePicture || 'https://via.placeholder.com/50'}
          alt={user?.fullName}
          className="w-12 h-12 rounded-full"
        />
        <form onSubmit={handleSubmit} className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's happening?"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            rows="3"
          />
          <div className="flex justify-between items-center mt-3">
            <button
              type="button"
              className="p-2 text-primary-600 hover:bg-primary-50 rounded-full"
            >
              <Image className="w-5 h-5" />
            </button>
            <button
              type="submit"
              disabled={!content.trim() || createPostMutation.isPending}
              className="px-6 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {createPostMutation.isPending ? 'Posting...' : 'Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
