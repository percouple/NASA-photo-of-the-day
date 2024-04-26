import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 250px;
  cursor: pointer;
`;

export default function Image({ item }) {
  return (
      <StyledImg src={item.links[0].href} alt={item.data[0].title}></StyledImg>
  );
}
