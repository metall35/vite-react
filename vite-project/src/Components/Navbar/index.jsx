import { NavLink } from "react-router-dom"
import NavItem from "../NavItem"

function Navbar() {
    const Navitem = [
        { to: "/", Navname: "Shope", className: "font-semibold text-lg" },
        { to: "/", Navname: "All" },
        { to: "/clothes", Navname: "Clothes" },
        { to: "/electronics", Navname: "Electronics" },
        { to: "/furnitures", Navname: "Furnitures" },
        { to: "/toys", Navname: "Toys" },
        { to: "/", Navname: "Others" },
    ]
    const NavActive = "underline underline-offset-4"
    const NavHover = "hover:underline underline-offset-4"
    return (
        <nav className="flex justify-between items-center z-10 py-4 px-8 font-normal text-sm">
            <ul className="flex items-center gap-3">
                {Navitem.map(({to, Navname, className,NavActive, NavHover})=>(
                    <NavItem 
                    key={Navname}
                    Navname={Navname}
                    to={to}
                    NavActive={NavActive}
                    NavHover={NavHover}
                    className={className}
                    />
                ))}
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

export default Navbar


//experiment