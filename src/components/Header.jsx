import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const Header = () => {


    const { user, logOut } = useContext(AuthContext)

    const handleLogUot = () => {
        logOut()
            .then(() => console.log('user log out'))
            .catch(error => console.error(error))
    }

    const Links = <>
        <li><NavLink to='/'>Home</NavLink> </li>
        <li><NavLink to='/login'>Log In</NavLink> </li>
        <li><NavLink to='/register'>Register</NavLink> </li>
        {user&&
        <>
        <li><NavLink to='/order'>Order</NavLink> </li>
        </>
        }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Rafa's <samp>Bammy</samp></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                    <>
                    {user&& <p className="w-4 h-4 bg-green-900 rounded-full mr-2"></p>}
                    <a onClick={handleLogUot} className="btn btn-sm">Sign Out</a>
                    </>
                    :<Link to='/login'><button className="btn btn-sm">Sign In</button></Link>
                }
                
            </div>
        </div>
    );
};

export default Header;