import { Link, useNavigate } from "react-router-dom";
import Fb from "../assets/facebook.png"
import Google from "../assets/google.png"
import Logo from "../assets/Barn&Blade.png"

interface LoginProps {
    onLogin: (status: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const nav = useNavigate();

    const handleLoginClick = () => {
        onLogin(true);
        nav('/')
        };

    return (
        <div className="p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
            {/* BOX */}
            <div className=" h-full shadow-2xl rounded-md flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
                {/* IMAGE CONTAINER */}
                <div className="relative h-1/3 w-full md:h-full md:w-1/2">
                    <img src={Logo} alt="" className="object-cover my-10" />
                </div>
                {/* FORM CONTAINER */}
                <div className="p-10 flex flex-col gap-8 md:w-1/2">
                    <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
                    <p>Log into your account or create a new one using social buttons</p>
                    <button 
                        className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md"
                        onClick={handleLoginClick}>
                        <img
                            src={Google}
                            alt=""
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span>Sign in with Google</span>
                    </button>
                    <button 
                        className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md"
                        onClick={handleLoginClick}>
                        <img
                            src={Fb}
                            alt=""
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span>Sign in with Facebook</span>
                    </button>
                    <p className="text-sm">
                        Have a problem?<Link className="underline" to="/"> Contact us</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;