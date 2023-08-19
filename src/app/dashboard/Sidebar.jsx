import Link from "next/link";

const navLinks = [
    {
        path: '/dashboard',
        title: "Dashboard"
    },
    {
        path: '/dashboard/add-product',
        title: "Add product"
    },
    {
        path: '/dashboard/manage-products',
        title: "Manage products"
    },
    {
        path: '/dashboard/all-products',
        title: "All products"
    },
    {
        path: '/',
        title: "Home"
    },
]

const Sidebar = () => {
    return (
        <aside className="mr-10">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <ul>
                {
                    navLinks.map(({ path, title }) => (
                    <li className="my-4" key={path}>
                        <Link href={path}>{title}</Link>
                    </li>))
                }
            </ul>

        </aside>
    );
};

export default Sidebar;