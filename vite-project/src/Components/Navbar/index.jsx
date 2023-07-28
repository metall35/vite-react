import { NavLink } from "react-router-dom"

function Navbar() {
    const NavActive = "underline underline-offset-4"
    const NavHover = "hover:underline underline-offset-4"
    return (
        <nav className="flex justify-between items-center z-10 py-4 px-8 font-normal text-sm">
            <ul className="flex items-center gap-3 flex-wrapg">
                <li>
                    <NavLink
                        to="/"
                        className="font-semibold text-lg"
                    >
                        Shop
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? NavActive : NavHover }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        className={({ isActive }) => isActive ? NavActive : NavHover}
                        >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        className={({ isActive }) => isActive ? NavActive : NavHover}
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        className={({ isActive }) => isActive ? NavActive : NavHover}
                    >
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        className={({ isActive }) => isActive ? NavActive : NavHover}
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        className={({ isActive }) => isActive ? NavActive : NavHover}
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className=" text-gray-400 ">
                    Hi User!!
                </li>
                <li>
                    <NavLink
                        to="/My-account"
                        className={({ isActive }) => isActive ? NavActive : NavHover}
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/My-Order"
                        className={({ isActive }) => isActive ? NavActive : NavHover}
                    >
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/My-Orders"
                        className={({ isActive }) => isActive ? NavActive : NavHover}
                    >
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Sign-in"
                        className={({ isActive }) => isActive ? NavActive : NavHover}
                    >
                        Sign In
                    </NavLink>
                </li>
                <li>
                    🛒0
                </li>
            </ul>
        </nav>
    )
}
//main
export default Navbar