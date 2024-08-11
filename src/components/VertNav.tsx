import { Link, useLocation } from "react-router-dom";


const navLinks = [
    {
        title: "About",
        path: "/About",
    },
    {
        title: "Specials",
        path: "/Specials",
    },
    {
        title: "Products",
        path: "/Products",
    },
    {
        title: "Contact",
        path: "/Contact",
    },
];

function VertNav() {
    const location = useLocation()
    const currentUrl = location.pathname

    return (
        <>
            {currentUrl !== "/" && (
                <div className='h-full w-[6rem] bg-primary-500 fixed z-20 border-[1px] border-b-background-200 border-x-0 border-t-0'>
                <div className='flex flex-col h-1/2 justify-center items-center gap-10 flex-1 px-5 '>
                    {navLinks.map(links => (
                        <Link key={links.title} to={links.path} className='font-Body'> {links.title}</Link>
                    ))}
                </div>
            </div>
            )}
        </>
    );
}

export default VertNav;