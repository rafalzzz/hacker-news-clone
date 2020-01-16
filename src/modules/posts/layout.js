import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from "react-router-dom";


import {buttons} from './consts/index'
import {About} from '../about/index'
import {PostsList} from './components/postsList'
import {Comments} from '../comments/index'
import {User} from '../user/index'


export const PostsLayout = ({ handleChangePostsType, handleLoadNextPage, handleFetchPosts, handleLoadComments, handleLoadUser, postsType, page, posts }) => {

  return (
    <div>
      <div style={{borderBottom: '#007bff solid 1px'}}>
          {buttons.map(button => <Link to={button.link}>
            <button type="button" 
            key={button.id} 
            className={button.className} 
            onClick={handleChangePostsType} 
            value={button.value}>
              {button.text} 
            </button>
            </Link>)}
      </div>
      <div className="container text-center col-xl-5" style={{marginTop: '10px'}}>
        <Switch>
          <Route exact path="/">
            <PostsList
              handleLoadNextPage={handleLoadNextPage}
              handleFetchPosts={handleFetchPosts}
              handleLoadComments={handleLoadComments}
              handleLoadUser={handleLoadUser}
              posts={posts}
              postsType={postsType}
              page={page}
            />
          </Route>
          <Route path="/item">
            <Comments />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
    )
  };