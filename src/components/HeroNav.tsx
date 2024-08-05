import {Link , useLocation} from 'react-router-dom';

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
function HeroNav() {
    const location = useLocation()
    const currentUrl = location.pathname

    return (
        <div>
            {currentUrl === "/" ? (
                <div className='w-screen h-14 items-center flex justify-between bg-background-50 text-text-950 fixed top-0 z-20'>
                    <Link to={'/'} className='font-Title text-3xl px-4 flex-2'>Barn & Blade Butchers</Link>
                    <div className='flex flex-row justify-center gap-5 flex-1 mr-[10rem]'>
                        {navLinks.map(links => (
                            <Link key={links.title} to={links.path} className='font-Body'> {links.title}</Link>
                        ))}
                    </div>
                    <Link to={'/Login'} className='font-Body mr-10'>Login</Link>
                </div>
            ) : (
                <div className='hidden w-screen h-14 items-center md:flex flex-row justify-center text-center bg-background-50 fixed top-0'>
                    <Link to={'/'} className='font-Title text-5xl text-text-950'>Barn & Blade Butchers</Link>
                </div>
            )}
        </div>
    );
}

export default HeroNav;