export const selectPosts = state => state.comments.comments;

export const selectPostById = id => state =>
  state.posts.posts.find(post => post.id === id);