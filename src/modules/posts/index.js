import React, { memo, useState, useCallback } from 'react';
import { PostsLayout } from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsStarted } from '../../store/posts/actions';
import { fetchCommentsStarted } from '../../store/comments/actions';
import { selectPosts } from '../../store/posts/selectors';

export const Posts = memo(() => {

  const [postsType, setPostsType] = useState('news');
  const [page, setPage] = useState(1)
  const [postID, setPostID] = useState(0)

  const dispatch = useDispatch();
  const handleFetchPosts = useCallback((postsType, page) => {
    dispatch(fetchPostsStarted({ type: postsType, page: page}));
  }, []);

  const handleFetchComments = useCallback((postID) => {
    dispatch(fetchCommentsStarted({ id: postID }));
  }, []);

  const handleChangePostsType = e => {
    setPostsType(e.target.value);
    setPage(1);
    handleFetchPosts(e.target.value, page)
  }

  const handleLoadNextPage = (e) => {
    setPage(page + 1);
    handleFetchPosts(postsType, page)
  }

  const handleChangePostID = (id) => {
    setPostID(id);
  }

  const handleLoadComments = (id) => {
    setPostID(id);
    handleFetchComments(postID)
  }

const posts = useSelector(selectPosts);
/* const postById = useSelector(selectPostById(22002062)); */

return (
    <PostsLayout
      handleChangePostsType={handleChangePostsType}
      handleLoadNextPage={handleLoadNextPage}
      handleFetchPosts={handleFetchPosts}
      handleChangePostID={handleChangePostID}
      postsType={postsType}
      page={page}
      posts={posts}
      postID={postID}
      handleLoadComments={handleLoadComments}

      /* postById={postById} */
    />
  );
});