import { NavLink } from "react-router-dom"
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShopContext } from "../../Context";
import MyDropdown from "../CheckoutSideMenu";

function Navbar() {
    const { count } = useContext(ShopContext)
    const NavActive = "underline underline-offset-4"
    const NavHover = "hover:underline underline-offset-4"
    return (
        <nav className="flex justify-between items-center z-10 py-4 px-8 font-normal text-sm">
            <ul className="flex items-center gap-3 flex-wrap">
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
                        className={({ isActive }) => isActive ? NavActive : NavHover}
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
                </li>
                <li>
                    <MyDropdown>
                        <ShoppingCartIcon className="h-4 w-4 text-black" />
                        <p className="rounded-full text-xs ">{count}</p>
                    </MyDropdown>
                </li>
            </ul>
        </nav>
    )
}
//main
export default Navbar