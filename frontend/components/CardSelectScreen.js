import React, { useState } from "react";
import styled from "styled-components";

const StyledCardSelectScreen = styled.div`
  /* position: sticky; */
  top: 50%;
  left: 50%;
  z-index: 1000;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export default function CardSelectScreen({ selectedCard, setSelectedCard }) {

  console.log(selectedCard);

  return (
    <div style={{position: "absolute"}}>
      <StyledCardSelectScreen>
        This is My card select Screen
        <button onClick={() => setSelectedCard(null)}>X</button>
      </StyledCardSelectScreen>
    </div>
  );
}
