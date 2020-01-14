import React from 'react';

import {Link} from 'react-router-dom';

export const PostFooter = ({ handleLoadComments, points_count, user, added, postID, comments_count}) => {

    const show_comments = comments_count === 0 ? false : true

    return(
    <p><small>
        { user && 
        <span>{points_count} points by {user} </span>} {added}{show_comments && <span> | <Link to={`/item/${postID}`}><span className="text-muted" onClick={handleLoadComments(postID)}>  {comments_count} comments </span>  </Link> </span>}
    </small></p>
    )
};