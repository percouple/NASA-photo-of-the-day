import Title from './Title';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageContainer from './ImageContainer';
import styled from "styled-components";

const initialMessage = '<-- Type a prompt to generate images';
const initialNasaData = []

const StyledHeader = styled.section`
  display: flex;
  justify-content: space-between;
  padding-inline: 10px;
  padding-bottom: 10px;
  border-bottom: solid black 2px;
`

function App() {

  let [nasaData, setNasaData] = useState(initialNasaData);
  let [imageData, setImageData] = useState([]);
  let [inputValue, setInputValue] = useState('a');
  let [loading, setLoading] = useState(false);
  let [responseMessage, setResponseMessage] = useState(initialMessage);
  let [totalHits, setTotalHits] = useState(0);
  let [amountOfResultsShown, setAmountOfResultsShown] = useState(10);
  let [debouncedInputValue, setDebouncedInputValue] = useState('');

  const url = 'https://images-api.nasa.gov/search'
  const params = new URLSearchParams({
    // q: '',
    description: inputValue,
    media_type: 'image'
  });

  // Input change handler
  const onChange = (e) => {
    const { value } = e.target;
    setLoading(true);
    setInputValue(value);
  }

  // Timeout Delay handler
  useEffect(() => {
    inputValue ?
    setResponseMessage("Loading Images... ") :
    '';
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500); // Adjust the delay time as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue])

  // Input value change handler
  useEffect(() => {
    if (debouncedInputValue !== '') {
      axios.get(`${url}?${params.toString()}`)
        .then((res) => {
          const { collection } = res.data;
          setNasaData(collection)
          setImageData(collection.items)
          setTotalHits(collection.metadata.total_hits)
          setLoading(false);
        })
        .catch((err) => {
          console.log(err)
          setLoading(false);
        })
    }

  }, [debouncedInputValue])

  // Message change handler
  useEffect(() => {
    if (totalHits) {
      setResponseMessage(`${totalHits} images generated`)
      setTimeout(() => {
        setResponseMessage('');
      }, 2000);
    }
  }, [totalHits])

  return (
    <div className={loading ? "loading" : ''}>
      <Title
        amountOfResultsShown={setAmountOfResultsShown}
        setAmountOfResultsShown={setAmountOfResultsShown}
        totalHits={totalHits} 
        />
      <StyledHeader>
        <input type="text" placeholder='moon landing' value={inputValue} onChange={onChange} />
        <h4>{responseMessage}</h4>
      </StyledHeader>
      <ImageContainer
        amountOfResultsShown={amountOfResultsShown}
        nasaData={imageData}
        setLoading={setLoading}
        loading={loading}
      />
    </div>
  )
}

export default App
