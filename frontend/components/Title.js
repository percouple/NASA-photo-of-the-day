import React, { useState } from "react";
import styled from "styled-components";

const StyledTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const StyledSelect = styled.select`

`

export default function Title({ amountOfResultsShown, setAmountOfResultsShown, totalHits }) {

  const onChange = (e) => {
    setAmountOfResultsShown(e.target.value);
  }

  return <StyledTitle>
        <h1 className="title">Search NASA:</h1>
        <h4>Showing &nbsp;
          <StyledSelect defaultValue={10} onChange={onChange}>
            <option>5</option>
            <option>10</option>
            <option>30</option>
            <option>50</option>
            <option>100</option>
          </StyledSelect> results of {totalHits}</h4>
      </StyledTitle>;
}
  