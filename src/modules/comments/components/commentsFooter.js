import React from 'react';
import {Link} from 'react-router-dom';
import {userButtonStylesCommentsFooter} from '../consts/index'

export const CommentsFooter = ({ points_count, user, added, handleLoadUser }) => {

    const points = points_count ===1 ? "point" : "points"

    return(
    <p><small>
        { user && <span>{points_count} {points} by <Link to={`/user/${user}`}><button className="btn btn-link text-muted 6px ml-0 mr-0" style={userButtonStylesCommentsFooter} onClick={handleLoadUser} value={user}>
                {user} 
                </button></Link> </span>} {added}
    </small></p>
    )
};