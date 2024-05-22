import React from "react";

const ColorList = ({colors}) => {
    
    return (
        <ul>
            {colors.data.map(d => (
                <li key={d.name}>
                    <a href={`/colors/${d.name.toLowerCase()}`}>{d.name}</a>
                </li>
            ))}
        </ul>
    );
};

export default ColorList;