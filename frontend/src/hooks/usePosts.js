import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postAPI } from '../services/api';
import toast from 'react-hot-toast';

export const usePosts = (page = 1) => {
  return useQuery({
    queryKey: ['posts', page],
    queryFn: () => postAPI.getPosts(page)
  });
};

export const usePost = (id) => {
  return useQuery({
    queryKey: ['post', id],
    queryFn: () => postAPI.getPost(id),
    enabled: !!id
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => postAPI.createPost(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      toast.success('Post created successfully!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to create post');
    }
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => postAPI.deletePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
      toast.success('Post deleted successfully!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to delete post');
    }
  });
};

export const useLikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => postAPI.likePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to like post');
    }
  });
};

export const useUnlikePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => postAPI.unlikePost(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to unlike post');
    }
  });
};
