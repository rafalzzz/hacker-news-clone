import React from 'react';
import {commentsButtonStyles} from '../consts/index'
import {Link} from 'react-router-dom';

export const PostFooter = ({ points_count, user, added, postID, comments_count, handleLoadComments}) => {

    const show_comments = comments_count === 0 ? false : true

    return(
    <p><small>
        { user && 
        <span>{points_count} points by {user} </span>} {added}{show_comments && <span> | <Link to={`/item/${postID}`}><button className="btn btn-link text-muted 6px" style={commentsButtonStyles} onClick={handleLoadComments} value={postID}>  {comments_count} comments </button>  </Link> </span>}
    </small></p>
    )
};