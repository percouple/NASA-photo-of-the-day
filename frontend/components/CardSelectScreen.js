import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCardSelectScreen = styled.div`
    position: relative;
    z-index: 1000;
`

export default function CardSelectScreen({selectedCard, setSelectedCard}) {

    console.log(selectedCard);

    return (
        <StyledCardSelectScreen>
            This is My card select Screen
        </StyledCardSelectScreen>
    )
}