import React from 'react';

import {CommentsTitle} from './components/commentsTitle'
import {CommentsFooter} from './components/commentsFooter'

import {commentsDivClassName, commentsDivStyles} from './consts/index'

import ReactHtmlParser from 'react-html-parser';

export const CommentsLayout = ({ postInfo }) => {

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
        />
      </div>
      {<div className="container text-left" style={{marginTop: '25px'}}>
      {postInfo.comments &&
      postInfo.comments.map(comment => (
        <div className={commentsDivClassName} key={comment.id} style={commentsDivStyles}>
          <div>
            <p style={{fontSize: '14px'}}>{comment.user} {comment.time_ago}</p>
            {ReactHtmlParser(comment.content)}
          </div>
          {comment.comments.map(comment => (
          <div className={commentsDivClassName} key={comment.id} style={commentsDivStyles}>
              <p style={{fontSize: '14px'}}>{comment.user} {comment.time_ago}</p>
              {ReactHtmlParser(comment.content)}
            {comment.comments.map(comment => (
            <div className={commentsDivClassName} key={comment.id} style={commentsDivStyles}>
                <p style={{fontSize: '14px'}}>{comment.user} {comment.time_ago}</p>
                {ReactHtmlParser(comment.content)}
              {comment.comments.map(comment => (
              <div className={commentsDivClassName} key={comment.id} style={commentsDivStyles}>
                  <p style={{fontSize: '14px'}}>{comment.user} {comment.time_ago}</p>
                  {ReactHtmlParser(comment.content)}
              </div>
      ))}
        </div>
      ))}
        </div>
      ))}
        </div>
      ))}

      </div>}
    </div>
  )
};