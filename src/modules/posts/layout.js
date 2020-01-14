import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {buttons} from './consts/index'
import {PostsList} from './components/postsList'

export const PostsLayout = ({ handleChangePostsType, handleLoadNextPage, handleFetchPosts, postsType, page, posts }) => {

  return (
    <div>
      <div style={{borderBottom: '#007bff solid 1px'}}>
          {buttons.map(button => <button type="button" className={button.className} onClick={handleChangePostsType} value={button.value}>{button.text} </button>)}
      </div>
      <div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
        <PostsList
          handleLoadNextPage={handleLoadNextPage}
          handleFetchPosts={handleFetchPosts}
          posts={posts}
          postsType={postsType}
          page={page}
        />
      </div>
    </div>
    )
  };