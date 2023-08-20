import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <aside className='bg-sky-700 text-white font-semibold p-5 w-[400px] h-[100vh]'>
            <h2 className='text-3xl text-center pt-4'>Dashboard</h2>
            <div className='flex flex-col gap-5 mt-8'>
                <Link href="/dashboard/blogs">Blogs</Link>
                <Link href="/dashboard/classes">Classes</Link>
                <Link href="/dashboard/dashboardAbout">About</Link>
                <Link href="/dashboard/products">Products</Link>
                <hr />
                <Link href="/">Home</Link>
            </div>
        </aside>
    );
};

export default Sidebar;