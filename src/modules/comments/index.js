import React, { memo, useCallback } from 'react';
import { PostsLayout } from './layout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsStarted } from '../../store/comments/actions';
import { selectPostInfo, selectComments } from '../../store/comments/selectors';

export const Comments = memo(() => {

    const dispatch = useDispatch();
    const handleFetchComments = useCallback((id) => {
            dispatch(fetchPostsStarted({ id: id }));
}, []);

const postInfo = useSelector(selectPostInfo);
const comments = useSelector(selectComments);
/* const postById = useSelector(selectPostById(22002062)); */

return (
    <PostsLayout
      postInfo={postInfo}
      handleFetchComments={handleFetchComments}
      comments={comments}
    />
  );
});