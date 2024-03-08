import React, { useState } from 'react';
import styled from 'styled-components';
import nasaLogo from '../nasa-logo.png';
import CardSelectScreen from './CardSelectScreen';

const StyledContainer = styled.div`
    background-image: url(${nasaLogo}); 
    background-size: 90vw;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-top: 10px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    min-height: 500px;
`

const StyledCard = styled.div`
    width: 100%;
    max-width: 15vw;
    min-width: 250px;
    height: auto;
    margin: 10px;
    padding: 10px;
    background-color: rgb(50, 50, 50);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: -6px 10px 0px 0px rgb(0, 0, 0);

    .selected {
    border: solid red 2px;
    }
`

const StyledImg = styled.img`
    max-width: inherit;
    display: block;
    min-width: 250px;
    pointer-events: none;
`

export default function ImageContainer({ amountOfResultsShown, nasaData }) {

    const [selectedCard, setSelectedCard] = useState(null);

    const reducedData = nasaData.slice(0, amountOfResultsShown);

    let selectedData = null;
    if (selectedCard) {
        selectedData = nasaData[selectedCard];
    }

    const handleClick = (index) => {
        setSelectedCard(index);
    }

    return (
        <StyledContainer>
            {typeof selectedCard === 'number' &&
                <CardSelectScreen
                    setSelectedCard={setSelectedCard}
                    selectedCard={selectedData}
                />}
            {reducedData.map((item, index) => (
                <StyledCard onClick={() => handleClick(index)} id={index} key={index}>
                    <StyledImg src={item.links[0].href} alt={item.data[0].title} />
                    {/* <h3 className="image-element">&quot;{item.data[0].title}&quot;</h3>
                    <p className="image-element">Description: {item.data[0].description}</p> */}
                </StyledCard>
            ))}
        </StyledContainer>
    );
}