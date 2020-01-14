import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {CommentsTitle} from './components/commentsTitle'
import {CommentsFooter} from './components/commentsFooter'

export const CommentsLayout = ({ comments, postInfo }) => {

  return (
    <div>
      <div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
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