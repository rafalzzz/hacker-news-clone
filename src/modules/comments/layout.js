import React, { useEffect } from 'react';

import {CommentsTitle} from './components/commentsTitle'
import {CommentsFooter} from './components/commentsFooter'

export const CommentsLayout = ({ handleFetchComments, postID, comments, postInfo }) => {

/*   useEffect(() => {
    handleFetchComments(postID)
  }, []); */

  return (
    <div>
      <div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
        <h1>ASD</h1>
        <CommentsTitle 
          title={postInfo.title}
          domain={postInfo.domain}
          url={postInfo.url}
        />
        <CommentsFooter 
          points_count={postInfo.points}
          user={postInfo.user}
          added={postInfo.time_ago}
        />
      </div>
      {<div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
        <ul>
      {comments &&
      comments.map(comment => (
        <li className="font-weight-bold text-secondary text-left p-2" key={comment.id} style={{fontSize: '16px'}}>
          <span>{comments.content}</span>
        </li>
      ))}
        </ul>
      </div>}
    </div>
  )
};