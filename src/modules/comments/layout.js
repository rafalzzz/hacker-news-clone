import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {CommentsTitle} from './components/commentsTitle'
import {CommentsFooter} from './components/commentsFooter'

export const PostsLayout = ({ handleFetchComments, comments }) => {

  return (
    <div>
      <div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
        <CommentsTitle 
          title={title}
          domain={domain}
          url={url}
        />
        <CommentsFooter 
          points_count={points}
          user={user}
          added={time_ago}
        />
      </div>
{      <div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
        <ul>
      {comments &&
      comments.map(comment => (
        <li className="font-weight-bold text-secondary text-left p-2" key={p.id} style={{fontSize: '18px'}}>
          <span>{comments.content}</span>
        </li>
      ))}
        </ul>
      </div>}
    </div>
  )
};