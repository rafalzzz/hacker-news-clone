import React from 'react';

export const CommentsTitle = ({ title, url, domain}) => (
    <h3 className="text-dark cursor-pointer">
        <a href={url} className="text-dark" role="button">
            {title}
        {domain &&
        <p><small className="text-muted">({domain})</small></p>}</a> 
    </h3>
);