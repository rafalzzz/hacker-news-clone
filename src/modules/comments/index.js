import React, { memo, useCallback } from 'react';
import { CommentsLayout } from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { selectPostInfo } from '../../store/comments/selectors';


import { fetchUserStarted } from '../../store/user/actions';

export const Comments = memo(() => {

  const dispatch = useDispatch();
  const handleFetchUser = useCallback((name) => {
    dispatch(fetchUserStarted({ name: name }));
  }, []);

  const postInfo = useSelector(selectPostInfo);

  const handleLoadUser = (e) => {
    handleFetchUser(e.target.value)
  }

  return (
      <CommentsLayout
        postInfo={postInfo}
        handleLoadUser={handleLoadUser}
      />
    );
  });