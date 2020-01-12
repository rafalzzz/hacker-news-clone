import React from 'react';

export const PostFooter = ({ points_count, user, added, comments_count}) => {

    const show_comments = comments_count === 0 ? false : true

    return(
    <p><small>
        { user && <span>{points_count} points by {user} </span>} {added}{show_comments && <span> | {comments_count} comments </span>}
    </small></p>
    )
};