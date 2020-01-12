import React from 'react';

export const Buttons = ({ handleChangePostsType }) => (
    <div style={{borderBottom: '#007bff solid 1px'}}>
        <button type="button" className="btn btn-link p-3" onClick={handleChangePostsType} value="news">top</button>
        <button type="button" className="btn btn-link p-3" onClick={handleChangePostsType} value="newest">new</button>
        <button type="button" className="btn btn-link p-3" onClick={handleChangePostsType} value="show">show</button>
        <button type="button" className="btn btn-link p-3" onClick={handleChangePostsType} value="ask">ask</button>
        <button type="button" className="btn btn-link p-3" onClick={handleChangePostsType} value="jobs">jobs</button>
        <button type="button" className="btn btn-link float-right p-3" onClick={handleChangePostsType} value="about">about</button>
    </div>
);