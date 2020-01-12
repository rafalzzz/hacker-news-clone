import React, { memo, useCallback, useState } from 'react';
import { PostsLayout } from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsStarted } from '../../store/posts/actions';
import { selectPostById, selectPosts } from '../../store/posts/selectors';

export const Posts = memo(() => {

  const [postsType, setPostsType] = useState('news');
  const [page, setPage] = useState(1)

    const dispatch = useDispatch();
    const handleFetchPosts = useCallback((type, page) => {
            dispatch(fetchPostsStarted({ type: type, page: page}));
}, []);

  const handleChangePostsType = e => {
    setPostsType(e.target.value);
    setPage(1);
    handleFetchPosts(postsType, page)
  }

  const handleLoadNextPage = () => {
    setPage(page + 1);
    handleFetchPosts(postsType, page)
  }


const posts = useSelector(selectPosts);
const postById = useSelector(selectPostById(22002062));

return (
    <PostsLayout
      handleChangePostsType={handleChangePostsType}
      posts={posts}
      postById={postById}
      handleLoadNextPage={handleLoadNextPage}
    />
  );
});