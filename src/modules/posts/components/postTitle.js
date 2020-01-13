import React from 'react';

export const PostTitle = ({ title, url, domain}) => (
    <h6 className="text-dark cursor-pointer">
        <a href={url} className="text-dark" role="button">
            {title}
        {domain &&
        <small className="text-muted"> ({domain})</small>}</a> 
    </h6>
);