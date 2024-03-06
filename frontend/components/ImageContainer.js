import React from 'react';
import styled from 'styled-components';
import nasaLogo from '../nasa-logo.png'; 

const StyledContainer = styled.div`
    background-image: url(${nasaLogo}); 
    background-size: 100vw;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-top: 30px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export default function ImageContainer ({ nasaData, amountOfResultsShown }) {
    
    console.log(nasaData)

    return (
        <StyledContainer>
            {nasaData.slice(0, ).map((item, index) => (
                <div className="image-card image" key={index}>
                    <img className="image-element" src={item.links[0].href} alt={item.data[0].title} />
                    {/* <h3 className="image-element">&quot;{item.data[0].title}&quot;</h3> */}
                    {/* <p className="image-element">Description: {item.data[0].description}</p> */}
                </div>
            ))}
        </StyledContainer>
    );
}