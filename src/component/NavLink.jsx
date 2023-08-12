"use client";
import classNames from '@/utils/classNames';
import Link from 'next/link';
import {usePathname} from "next/navigation";

const NavLink = ({children, href, exact =false, activeClassName, ...props}) => {
    const path = usePathname();
    const active = exact ? path ===href : path.startsWith(href);
    const classes = classNames(props.classNames, active && activeClassName);
    if(classes){
        props.classNames = classes
    }
    return (
        <Link href={href} {...props}>
        {children}            
        </Link>
    );
};

export default NavLink;