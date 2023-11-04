import { NavLink, Outlet } from "react-router-dom"

export const Layout =()=>{

    return(
        <div>
            <NavLink to="/TablaSencilla">
            TablaSencilla
            </NavLink>
            <NavLink to="/Gallery">
            Gallery
            </NavLink>
            <NavLink to="/Form">
            Form
            </NavLink>
            <Outlet/>
        </div>
    )
}