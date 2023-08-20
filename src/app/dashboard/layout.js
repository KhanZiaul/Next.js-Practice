import React from 'react';

export const metadata = {
    title: 'Dashboard | Practice NextJS',
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