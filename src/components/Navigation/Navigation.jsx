import React from 'react';
import NavLink from '../NavLink/NavLink';

const Navigation = () => {
    return (
        <div className="navbar bg-sky-700 text-white font-semibold mb-4 p-4">
            <div className="flex-1">
                <h2>NextJS Practice</h2>
            </div>
            <div className="flex gap-5">
                <NavLink exact={true} activeClassName="text-yellow-500" href="/">Home</NavLink>
                <NavLink activeClassName="text-yellow-600" href="/about">About</NavLink>
                <NavLink activeClassName="text-yellow-600" href="/dashboard">Dashboard</NavLink>
            </div>
        </div>
    );
};

export default Navigation;