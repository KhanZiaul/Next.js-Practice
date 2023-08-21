import Link from 'next/link';
import React from 'react';
import NavLink from '../NavLink/NavLink';

const Navigation = () => {
    return (
        <div className="navbar bg-sky-700 text-white font-semibold mb-4 p-4">
            <div className="flex-1">
                <h2>NextJS Practice</h2>
            </div>
            <div className="flex gap-5">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/dashboard">Dashboard</NavLink>
            </div>
        </div>
    );
};

export default Navigation;