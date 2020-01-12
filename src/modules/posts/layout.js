import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Buttons} from './buttons'
import {PostTitle} from './postTitle'
import {PostFooter} from './postFooter'

export const PostsLayout = ({ handleChangePostsType, posts, postById, handleLoadNextPage }) => {
  
  
  return (
  <div>
    <Buttons 
      handleChangePostsType={handleChangePostsType}
    />
    <div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
      <ol>
    {postById && postById.id}
    {posts.map(p => (
      <li className="font-weight-bold text-secondary text-center p-2" key={p.id} style={{fontSize: '18px'}}>
        <PostTitle 
          title={p.title}
          domain={p.domain}
          url={p.url}
        />
        <PostFooter 
          points_count={p.points}
          user={p.user}
          added={p.time_ago}
          comments_count={p.comments_count}
        />
      </li>
    ))}
      </ol>
      <button type="button" className="btn btn-link p-3" onClick={handleLoadNextPage}>More ...</button>
    </div>
  </div>
  )
};