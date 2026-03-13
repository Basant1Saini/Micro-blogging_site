import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: [true, 'Post content is required'],
    maxlength: [500, 'Post cannot exceed 500 characters']
  },
  images: [{
    type: String
  }],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  shares: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  hashtags: [{
    type: String
  }],
  isEdited: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

postSchema.index({ user: 1, createdAt: -1 });
postSchema.index({ hashtags: 1 });

const Post = mongoose.model('Post', postSchema);

export default Post;
