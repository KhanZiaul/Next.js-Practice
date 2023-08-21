"use client";

import Link from 'next/link';
import React from 'react';
import {usePathname} from "next/navigation"

const NavLink = ({children , href, activeClassName , ...props}) => {

    const path = usePathname()

    return (
        <Link href={href}>
            {children}
        </Link>
    );
};

export default NavLink;