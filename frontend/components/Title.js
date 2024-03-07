import React from "react";
import styled from "styled-components";

const StyledTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

const StyledSelect = styled.select`

`

export default function Title({amountOfResultsShown}) {

  return <StyledTitle>
        <h1 className="title">Search Nasa:</h1>
        <h4>Showing &nbsp;
          <StyledSelect>
            <option>1</option>
            <option>5</option>
            <option>10</option>
            <option>30</option>
            <option>50</option>
            <option>90</option>
          </StyledSelect> results</h4>
      </StyledTitle>;
}
  