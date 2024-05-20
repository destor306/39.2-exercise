import React from "react";
import { NavLink } from "react-router-dom";

const ColorNavBar = ({colors}) => {
    const links = colors.map(color=>(
        <NavLink 
        key={color.name}
        to={`/colors/${color.name.toLowerCase()}`}>
            {color.name}
        </NavLink>
    ))

    return (
        <nav>
            <NavLink to="/colors">Home</NavLink>
            {links}
        </nav>
    );
}

export default ColorNavBar;