import React, { memo, useState, useCallback } from 'react';
import { PostsLayout } from './layout';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostsStarted } from '../../store/posts/actions';
import { fetchCommentsStarted } from '../../store/comments/actions';
import { fetchUserStarted } from '../../store/user/actions';

import { selectPosts } from '../../store/posts/selectors';

export const Posts = memo(() => {

  const [postsType, setPostsType] = useState('news');
  const [page, setPage] = useState(1)
  const [postsArray, setPostArray] = useState([])

  const dispatch = useDispatch();
  const handleFetchPosts = useCallback((postsType, page) => {
    dispatch(fetchPostsStarted({ type: postsType, page: page}));
  }, []);

  const handleFetchComments = useCallback((id) => {
    dispatch(fetchCommentsStarted({ id: id }));
  }, []);

  const handleFetchUser = useCallback((name) => {
    dispatch(fetchUserStarted({ name: name }));
  }, []);

/*   const handleChangePostsType = e => {
    setPostArray([])
    setPostsType(e.target.value);
    setPage(2);
    handleFetchPosts(e.target.value, page)
    for (let i=0; i<posts.length; i++) {
    postsArray.push(posts[i])
    }
  } */

  const handleLoadPosts = (type, page) => {
    handleFetchPosts(type, page)
    setPostArray(posts)
    }

  const handleChangePostsType = e => {
    setPostArray(posts)
    setPostsType(e.target.value);
    setPage(1);
    handleFetchPosts(e.target.value, page)
  }

  const handleLoadNextPage = (e) => {
/*     for (let i=0; i<posts.length; i++) {
      postsArray.push(posts[i])
    } */
    setPage(page + 1);
    handleFetchPosts(postsType, page)
    for (let i=0; i<posts.length; i++) {
    postsArray.push(posts[i])
    }
  }

  const handleLoadComments = (e) => {
    handleFetchComments(e.target.value)
  }

  const handleLoadUser = (e) => {
    handleFetchUser(e.target.value)
  }

/*   const loadPosts = (postsArray, posts) => {
    if (postsArray.length < 30) {
      return posts
    }
    if (postsArray.length > 30) {
      return postsArray
    }
  } */

  const posts = useSelector(selectPosts);

  console.log('Posty',postsArray)

return (
  <PostsLayout
      handleLoadPosts={handleLoadPosts}
      handleChangePostsType={handleChangePostsType}
      handleLoadNextPage={handleLoadNextPage}
      handleFetchPosts={handleFetchPosts}
      postsType={postsType}
      page={page}
      posts={postsArray}
      handleLoadComments={handleLoadComments}
      handleLoadUser={handleLoadUser}
    />
  );
});