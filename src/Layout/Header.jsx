import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../Hooks/useCart";

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const [cart]=useCart()
    const handleLogout = () => {
        logoutUser()
    }
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/menu">Our Menu</NavLink></li>
        <li><NavLink to="/order/salad">Order</NavLink></li>

        {
            user
                ? <>
                    <li><NavLink to="/dashboard/cart"><div className="indicator">
                        <span className="indicator-item badge badge-secondary ">+{cart.length}</span>
                        <button className="btn bg-transparent border-none text-white p-0 pr-3 min-h-0 h-auto text-xl">
                            <FaCartShopping></FaCartShopping>
                        </button>
                    </div></NavLink></li>
                    {/* <span>{user?.displayName}</span> */}
                    <li ><NavLink onClick={handleLogout} to="">Log Out</NavLink></li>
                </>
                : <>
                    <li><NavLink to="/login">Login</NavLink></li>
                </>
        }
    </>
    return (
        <div className="max-w-screen-lg navbar  fixed  z-10 bg-black bg-opacity-30 text-white">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Hunger Banger</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>

        </div>
    );
};

export default Header;