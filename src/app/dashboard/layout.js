import React from 'react';

export const metadata = {
    title: 'Practice NextJS | Dashboard',
    description: 'Practice NextJS',
  }

const layout = ({children}) => {
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default layout;