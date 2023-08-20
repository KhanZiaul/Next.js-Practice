import React from 'react';
import Sidebar from './sidebar';

const layout = ({ children }) => {
    return (
        <div className='flex gap-10'>
            <Sidebar></Sidebar>
            <div className='mt-5'>
                {children}
            </div>
        </div>
    );
};

export default layout;