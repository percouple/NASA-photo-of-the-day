import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.section`
  display: flex;
  justify-content: space-between;
  padding-inline: 10px;
  padding-bottom: 10px;
  border-bottom: solid black 2px;
`;

const initialMessage = '<-- Type a prompt to generate images';

export default function Subheader({
  setLoading,
  setInputValue,
  inputValue,
  totalHits,
}) {
    
  let [responseMessage, setResponseMessage] = useState(initialMessage);

  // Input change handler
  const onChange = (e) => {
    const { value } = e.target;
    setLoading(true);
    setInputValue(value);
  };

  // Message change handler
  useEffect(() => {
    if (totalHits) {
      setResponseMessage(`${totalHits} images generated`);
      setTimeout(() => {
        setResponseMessage("");
      }, 2000);
    }
  }, [totalHits]);

  return (
    <StyledHeader>
      <input
        type="text"
        placeholder="moon landing"
        value={inputValue}
        onChange={onChange}
      />
      <h4>{responseMessage}</h4>
    </StyledHeader>
  );
}
