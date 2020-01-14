import React, { useEffect } from 'react';

import {PostTitle} from './postTitle'
import {PostFooter} from './postFooter'

export const PostsList = ({ handleLoadNextPage, handleFetchPosts, postsType, page, posts }) => {

    useEffect(() => {
      handleFetchPosts("news", 1)
    }, []);
  
    useEffect(() => {
      handleFetchPosts(postsType, page)
    }, [postsType, page]);
  
    return (
        <div>
        <ol>
      {posts &&
      posts.map(p => (
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
      )
    };