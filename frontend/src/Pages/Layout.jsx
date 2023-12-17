import { NavLink, Outlet } from "react-router-dom"

export const Layout =()=>{

    return(
        <div>
            <li>
                <NavLink to="/JsonPlaceHolder">
                    JSON Placeholder
                </NavLink>
            </li> 
            <li>
                <NavLink to="/Gallery">
                    Images Gallery
                </NavLink>
            </li>
            <li>
                <NavLink to="/DynamicForm">
                    Simply Dynamic Form
                </NavLink>
            </li>
            <Outlet/>
        </div>
    )
}