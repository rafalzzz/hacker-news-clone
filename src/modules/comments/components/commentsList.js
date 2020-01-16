import React from 'react';
import {Link} from 'react-router-dom';

import {commentsDivClassName, commentsDivStyles, userButtonStyles} from '../consts/index'

import ReactHtmlParser from 'react-html-parser';

export const CommentsList = ({ postInfo, handleLoadUser }) => {

  return (
    <div>
      {<div className="container text-left" style={{marginTop: '25px'}}>
      {postInfo.comments &&
      postInfo.comments.map(comment => (
        <div className={commentsDivClassName} key={comment.id} style={commentsDivStyles}>
          <div>
            <p style={{fontSize: '14px'}}>
              <Link to={`/user/${comment.user}`}>
                <button className="btn btn-link text-muted 6px ml-0 mr-0" 
                style={userButtonStyles} 
                onClick={handleLoadUser} 
                value={comment.user}>
                  {comment.user} 
                </button>
                </Link> {comment.time_ago}</p>
            {ReactHtmlParser(comment.content)}
          </div>
          {comment.comments.map(comment => (
          <div className={commentsDivClassName} key={comment.id} style={commentsDivStyles}>
              <p style={{fontSize: '14px'}}>
                <Link to={`/user/${comment.user}`}>
                  <button className="btn btn-link text-muted 6px ml-0 mr-0" 
                  style={userButtonStyles} 
                  onClick={handleLoadUser} 
                  value={comment.user}>
                    {comment.user} 
                </button>
                </Link> {comment.time_ago}</p>
              {ReactHtmlParser(comment.content)}
            {comment.comments.map(comment => (
            <div className={commentsDivClassName} key={comment.id} style={commentsDivStyles}>
                <p style={{fontSize: '14px'}}>
                  <Link to={`/user/${comment.user}`}>
                    <button className="btn btn-link text-muted 6px ml-0 mr-0" 
                    style={userButtonStyles} 
                    onClick={handleLoadUser} 
                    value={comment.user}>
                {comment.user} 
                </button>
                </Link> {comment.time_ago}</p>
                {ReactHtmlParser(comment.content)}
              {comment.comments.map(comment => (
              <div className={commentsDivClassName} key={comment.id} style={commentsDivStyles}>
                  <p style={{fontSize: '14px'}}>
                    <Link to={`/user/${comment.user}`}>
                      <button className="btn btn-link text-muted 6px ml-0 mr-0" 
                      style={userButtonStyles} 
                      onClick={handleLoadUser} 
                      value={comment.user}>
                {comment.user} 
                </button>
                </Link> {comment.time_ago}</p>
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