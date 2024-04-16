import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "center",
                gap: 10,
                margin:"10px"
            }}
        >
            <NavLink to="/">Users</NavLink>
            <NavLink to="/group">Group</NavLink>
        </nav>
    )
}
