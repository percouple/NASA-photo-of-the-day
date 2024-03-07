import Title from './Title';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResponseMessage from './ResponseMessage';
import ImageContainer from './ImageContainer';
import styled from "styled-components";

const initialMessage = '';
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
  let [inputValue, setInputValue] = useState('');
  let [loading, setLoading] = useState(false);
  let [responseMessage, setResponseMessage] = useState(initialMessage);
  let [totalHits, setTotalHits] = useState(0);
  let [amountOfResultsShown, setAmountOfResultsShown] = useState(30);
  let [debouncedInputValue, setDebouncedInputValue] = useState('');

  const url = 'https://images-api.nasa.gov/search'
  const params = new URLSearchParams({
    // q: '',
    description: inputValue,
    media_type: 'image'
  });

  const onChange = (e) => {
    const { value } = e.target;
    setLoading(true);
    setInputValue(value);
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500); // Adjust the delay time as needed

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue])

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

  return (
    <div className={loading ? "loading" : ''}>
      <Title amountOfResultsShown={amountOfResultsShown}/>
      <StyledHeader>
        <input type="text" placeholder='moon landing' value={inputValue} onChange={onChange} />
        <h4>{`Total results: ${totalHits}`}</h4>
      </StyledHeader>
      <ResponseMessage
        responseMessage={responseMessage} />
      <ImageContainer
        nasaData={imageData}
        setLoading={setLoading}
        loading={loading}
        amountOfResultsShown={amountOfResultsShown} />
    </div>
  )
}

export default App
