import NavLink from '@/components/NavLink/NavLink';
import React from 'react';

const Sidebar = () => {

    const routes = [
        {
            pathName: "Blogs",
            href: "/dashboard/blogs"
        },
        {
            pathName: "Classes",
            href: "/dashboard/classes"
        },
        {
            pathName: "About",
            href: "/dashboard/dashboardAbout"
        },
        {
            pathName: "Products",
            href: "/dashboard/products"
        },
    ]

    return (
        <aside className='bg-sky-700 text-white font-semibold p-5 w-[400px] h-[100vh]'>
            <h2 className='text-3xl text-center pt-4'>Dashboard</h2>
            <div className='flex flex-col gap-5 mt-8'>
                {
                    routes.map((route) => {
                        return (
                            <NavLink key={route.pathName} activeClassName="text-yellow-500" href={route.href}>{route.pathName}</NavLink>
                        )
                    })
                }
                <hr />
                <NavLink href="/" exact={true} activeClassName="text-yellow-500" >Home</NavLink>
            </div>
        </aside>
    );
};

export default Sidebar;