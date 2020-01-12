export const selectPosts = state => state.posts.posts;

export const selectPostById = id => state =>
  state.posts.posts.find(post => post.id === id);