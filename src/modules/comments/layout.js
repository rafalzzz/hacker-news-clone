import React from 'react';

import {CommentsTitle} from './components/commentsTitle'
import {CommentsFooter} from './components/commentsFooter'
import {CommentsList} from './components/commentsList'

export const CommentsLayout = ({ postInfo, handleLoadUser }) => {

  return (
    <div>
      <div className="container text-center pt-3 pb-3" style={{marginTop: '10px', borderBottom: '#ebebeb solid 15px'}}>
        <CommentsTitle 
          title={postInfo.title}
          domain={postInfo.domain}
          url={postInfo.url}
        />
        <CommentsFooter 
          points_count={postInfo.points}
          user={postInfo.user}
          added={postInfo.time_ago}
          handleLoadUser={handleLoadUser}
        />
      </div>
        <CommentsList 
          postInfo={postInfo}
          handleLoadUser={handleLoadUser}
        />
    </div>
  )
};