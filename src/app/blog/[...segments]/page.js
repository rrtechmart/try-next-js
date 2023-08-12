import React from 'react';

const SingleBlog = ({params}) => {
    const [year, id]=params.segments || [];
    console.log(params.segments);
    return (
        <div>
            Its a single blog {year || new Date().getFullYear()} for {id}
        </div>
    );
};

export default SingleBlog;