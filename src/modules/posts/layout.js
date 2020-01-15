import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from "react-router-dom";


import {buttons} from './consts/index'
import {PostsList} from './components/postsList'
import {Comments} from '../comments/index'

export const PostsLayout = ({ handleChangePostsType, handleLoadNextPage, handleFetchPosts, handleChangePostID, postsType, page, posts, handleLoadComments }) => {

  return (
    <div>
      <div style={{borderBottom: '#007bff solid 1px'}}>
        <Link to="/">
          {buttons.map(button => <button type="button" className={button.className} onClick={handleChangePostsType} value={button.value}>{button.text} </button>)}
        </Link>
      </div>
      <div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
        <Switch>
          <Route exact path="/">
            <PostsList
              handleLoadNextPage={handleLoadNextPage}
              handleFetchPosts={handleFetchPosts}
              handleChangePostID={handleChangePostID}
              posts={posts}
              postsType={postsType}
              page={page}
              handleLoadComments={handleLoadComments}
            />
          </Route>
          <Route path="/item">
            <Comments
/*               postID={postID} */
            />
          </Route>
        </Switch>
      </div>
    </div>
    )
  };