import Link from "next/link";
import NavLink from "./NavLink";

const navLinks =[
    {
        path:'/',
        title:'Home',
    },
    {
        path:'/about',
        title:'About',
    },
    {
        path:'/profile',
        title:'Profile',
    },
    {
        path:'/blog',
        title:'Blog',
    },
    {
        path:'/dashboard',
        title:'Dashboard',
    },
    
]

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between container mx-auto">
            <h1 className="text-2xl font-semibold">Next js learning</h1>

            <ul className="flex items-center justify-center">
                {navLinks.map(({path, title})=> (<li key={path} className="mx-2">
                    <NavLink exact={path === '/'} activeClassName="text-blue-500" href={path}> {title} </NavLink>
                </li>))}
            </ul>
            
        </nav>
    );
};

export default Navbar;