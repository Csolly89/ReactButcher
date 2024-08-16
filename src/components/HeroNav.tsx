import {Link , useLocation} from 'react-router-dom';
interface HeroNavProps {
    cartLength: number;
    user: boolean;
    onLogout: () => void;
}

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

const HeroNav: React.FC<HeroNavProps> = ({ cartLength, user, onLogout }) => {
    const location = useLocation()
    const currentUrl = location.pathname

    return (
        <div className='text-white'>
            {currentUrl === "/" ? (
                <div className='w-screen h-14 items-center flex justify-between bg-background-50 text-text-950 fixed top-0 z-20'>
                    <Link to={'/'} className='font-Title text-3xl px-4 flex-2'>Barn & Blade Butchers</Link>
                    <div className='flex flex-row justify-center gap-5 flex-1 mr-[10rem]'>
                        {navLinks.map(links => (
                            <Link key={links.title} to={links.path} className='font-Body'> {links.title}</Link>
                        ))}
                    </div>
                    {user ? (
            <button onClick={onLogout} className='font-Body mr-10'>Logout</button>
            ) : (
                <Link to={'/Login'} className='font-Body mr-10'>Login</Link>
            )}
                    <Link to={'/Cart'} className='font-Body mr-10'>Cart({cartLength})</Link>
                </div>
            ) : (
                <div className='w-full h-14 items-center md:flex flex-row justify-center text-center bg-background-50 fixed top-0'>
                    <Link to={'/'} className='font-Title text-5xl text-text-950'>Barn & Blade Butchers</Link>
                    <div>
                    {user ? (
                        <button onClick={onLogout} className='font-Body mr-10'>Logout</button>
                            ) : (
                                <Link to={'/Login'} className='font-Body mr-10'>Login</Link>
                            )}
                    <Link to={'/Cart'} className='font-Body text-text-950 '>Cart({cartLength})</Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HeroNav;