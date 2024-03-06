import React from "react";

export default function ImageContainer ({ nasaData }) {

    console.log(nasaData)

    return (
        <div>
            {nasaData.slice(0, 3).map((item, index) => (
                <div key={index}>
                    <img src={item.links[0].href} alt={item.data[0].title} />
                    <h3>Title: {item.data[0].title}</h3>
                    <p>Description: {item.data[0].description}</p>
                </div>
            ))}
        </div>
    );
}