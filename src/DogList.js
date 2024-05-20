import React from "react";

const DogList = ({dogs}) => {
    return (
        <ul>
            {dogs.map(d => (
                <li key={d.name}>
                    <a href={`/dogs/${d.name.toLowerCase()}`}>{d.name}</a>
                </li>
            ))}
        </ul>
    );
};

export default DogList;