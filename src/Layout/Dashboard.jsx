import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* dashboard sidebar */}
            <div className="w-56 min-h-screen bg-orange-400">
                <ul className="menu p-4 text-lg">
                    <li>
                        <NavLink to="/dashboard/userHome">
                        <FaHome></FaHome>
                         User Home
                         </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                        <FaShoppingCart></FaShoppingCart>
                         My Cart
                         </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                        <FaCalendar></FaCalendar>
                         Reservation
                         </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                        <FaAd></FaAd>
                         Add Review
                         </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                        <FaList></FaList>
                         Reservation
                         </NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                        <FaHome></FaHome>
                          Home
                         </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                        <FaSearch></FaSearch>
                          Menu
                         </NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;