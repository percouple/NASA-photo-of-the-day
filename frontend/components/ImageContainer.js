import React, { useState } from "react";
import styled from "styled-components";
import nasaLogo from "../nasa-logo.png";
import Image from './Image';

// Background/Main container styling
const StyledContainer = styled.div`
  background-image: url(${nasaLogo});
  background-size: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  padding-top: 10px;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 800px;
`;

// Card Styling
const StyledCard = styled.div`
  width: 100%;
  max-width: 15vw;
  min-width: 250px;
  height: fit-content;
  margin: 10px;
  padding: 10px;
  background-color: rgb(50, 50, 50);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -6px 10px 0px 0px rgb(0, 0, 0);
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 8px;

  .selected {
    border: solid red 2px;
  }

  // TODO - Add shadow when user hovers over
  /* &:hover {
    box-shadow: inset 100px 100px 0 0 rgba(0, 0, 0, 0.7);
  } */
`;

export default function ImageContainer({ amountOfResultsShown, imageData, setSelectedCard }) {

  // Reduce rendered data by amount of results shown
  const reducedData = imageData.slice(0, amountOfResultsShown);

  const handleClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <StyledContainer>
      {reducedData.map((item, index) => (
        <StyledCard onClick={() => handleClick(index)} id={index} key={index}>
          <Image item={item} />
        </StyledCard>
      ))}
    </StyledContainer>
  );
}
