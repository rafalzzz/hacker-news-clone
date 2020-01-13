import React, { memo, useCallback } from 'react';
import { PostsLayout } from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsStarted } from '../../store/posts/actions';
import { selectPostById, selectPosts } from '../../store/posts/selectors';

export const Posts = memo(() => {

    const dispatch = useDispatch();
    const handleFetchPosts = useCallback((postsType, page) => {
            dispatch(fetchPostsStarted({ type: postsType, page: page}));
}, []);

const posts = useSelector(selectPosts);
const postById = useSelector(selectPostById(22002062));

return (
    <PostsLayout
    handleFetchPosts={handleFetchPosts}
      posts={posts}
      postById={postById}
    />
  );
});