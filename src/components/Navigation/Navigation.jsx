import Link from 'next/link';
import React from 'react';

const Navigation = () => {
    return (
        <div className="navbar bg-sky-700 text-white font-semibold mb-4 p-4">
            <div className="flex-1">
                <h2>NextJS Practice</h2>
            </div>
            <div className="flex gap-5">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/dashboard">Dashboard</Link>
            </div>
        </div>
    );
};

export default Navigation;