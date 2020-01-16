import React from 'react';
import {commentsButtonStyles, userButtonStyles} from '../consts/index'
import {Link} from 'react-router-dom';

export const PostFooter = ({ points_count, user, added, postID, comments_count, handleLoadComments, handleLoadUser}) => {

    const show_comments = comments_count === 0 ? false : true
    const comments = comments_count === 1 ? "comment" : "comments"
    const points = points_count ===1 ? "point" : "points"

    return(
    <p><small>
        { user && 
        <span> {points_count} {points} by 
        <Link to={`/user/${user}`}>
            <button className="btn btn-link text-muted 6px ml-1 mr-1" style={userButtonStyles} onClick={handleLoadUser} value={user}>
                {user} 
                </button>  
        </Link> 
        </span>} 
        {added}
        {show_comments && 
        <span> | 
            <Link to={`/item/${postID}`}>
                <button className="btn btn-link text-muted 6px ml-1" style={commentsButtonStyles} onClick={handleLoadComments} value={postID}>
                         {comments_count} {comments} 
                      </button>  
            </Link> 
        </span>}
    </small></p>
    )
};