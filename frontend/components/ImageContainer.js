import React, { useState } from "react";
import styled from "styled-components";
import nasaLogo from "../nasa-logo.png";
import Image from './Image';

// Background/Main container styling
const StyledContainer = styled.div`
  background-image: url(${nasaLogo});
  background-size: 86vh;
  background-position: calc(50% + 30px) 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.15);

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
  padding: 7px;
  border-radius: 5px;
  border: 3px solid black;
  background-color: #EFA00B;
  background-size: contain;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: 6px 10px 0px 0px rgb(0, 0, 0); */

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
