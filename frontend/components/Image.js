import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  max-width: inherit;
  display: block;
  min-width: 250px;
  pointer-events: none;
`;

export default function Image({item}) {

    return <StyledImg src={item.links[0].href} alt={item.data[0].title} >
    {/* <h3 className="image-element">&quot;{item.data[0].title}&quot;</h3>
              <p className="image-element">Description: {item.data[0].description}</p> */}</StyledImg>
}
