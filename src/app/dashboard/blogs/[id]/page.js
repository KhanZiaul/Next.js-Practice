import React from 'react';

const SingleBlog = ({params}) => {
    console.log(params.id)
    return (
        <div>
            <h2>Blog number {params.id}</h2>
        </div>
    );
};

export default SingleBlog;