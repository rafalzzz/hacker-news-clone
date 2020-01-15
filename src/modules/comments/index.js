import React, { memo, useCallback } from 'react';
import { CommentsLayout } from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommentsStarted } from '../../store/comments/actions';
import { selectPostInfo, selectComments } from '../../store/comments/selectors';

export const Comments = memo((postID) => {
  
  const dispatch = useDispatch();
  const handleFetchComments = useCallback((id) => {
    dispatch(fetchCommentsStarted({ id: id }));
  }, []);

  const postInfo = useSelector(selectPostInfo);
  const comments = useSelector(selectComments);
  /* const postById = useSelector(selectPostById(22002062)); */

  return (
      <CommentsLayout
        handleFetchComments={handleFetchComments}
        postID={postID}
        postInfo={postInfo}
        comments={comments}
      />
    );
  });