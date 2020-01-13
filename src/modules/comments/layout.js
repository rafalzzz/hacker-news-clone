import React, {useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {buttons} from './consts/index'
import {PostTitle} from './components/postTitle'
import {PostFooter} from './components/postFooter'

export const PostsLayout = ({ handleFetchPosts, posts }) => {

  const [postsType, setPostsType] = useState('news');
  const [page, setPage] = useState(1)

  useEffect(() => {
    handleFetchPosts("news", 1)
  }, []);

  useEffect(() => {
    handleFetchPosts(postsType, page)
  }, [postsType, page]);

  const handleChangePostsType = e => {
    setPostsType(e.target.value);
    setPage(1);
    handleFetchPosts(e.target.value, page)
  }

  const handleLoadNextPage = (e) => {
    setPage(page + 1);
    handleFetchPosts(postsType, page)
  }

  return (
    <div>
      <div style={{borderBottom: '#007bff solid 1px'}}>
          {buttons.map(button => <button type="button" className={button.className} onClick={handleChangePostsType} value={button.value}>{button.text} </button>)}
      </div>
      <div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
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
    </div>
    )
  };