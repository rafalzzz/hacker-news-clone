import React from 'react';

export const CommentsFooter = ({ points_count, user, added }) => {

    return(
    <p><small>
        { user && <span>{points_count} points by {user} </span>} {added}
    </small></p>
    )
};