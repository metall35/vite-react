/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

function NavItem({to,Navname,NavActive,NavHover,className}) {
    return (
        <li className={className}>
            <NavLink
                to={to}
                className={({ isActive }) => (isActive ? NavActive : NavHover)}
            >
                {Navname}
            </NavLink>
        </li>
    )
}

export default NavItem