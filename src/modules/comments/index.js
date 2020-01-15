import React, { memo } from 'react';
import { CommentsLayout } from './layout';
import { useSelector } from 'react-redux';
import { selectPostInfo } from '../../store/comments/selectors';

export const Comments = memo(() => {

  const postInfo = useSelector(selectPostInfo);

  return (
      <CommentsLayout
        postInfo={postInfo}
      />
    );
  });