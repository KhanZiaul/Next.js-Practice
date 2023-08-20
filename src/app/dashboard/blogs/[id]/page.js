import React from 'react';

const SingleBlog = ({params}) => {
    console.log(params.id)
    return (
        <div>
            <h2>Single Blog in dashboard</h2>
        </div>
    );
};

export default SingleBlog;