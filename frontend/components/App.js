import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ResponseMessage from './ResponseMessage';
import ImageContainer from './ImageContainer';
import styled from "styled-components";

const initialMessage = '';                         
const initialNasaData = [] 

const StyledTitle = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

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

  const url = 'https://images-api.nasa.gov/search'
  const params = new URLSearchParams({
    // q: '',
    description: inputValue,
    media_type: 'image'
  });

  const onChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  }

  useEffect(() => {
    setLoading(true);
    const loadingDelay = setTimeout(() => {
      axios.get(`${url}?${params.toString()}`)
      .then((res) => {
        // typeof res.data === 'string'
        const { collection } = res.data;
        console.log(collection)
        setNasaData(collection)
        setImageData(collection.items)
        setTotalHits(collection.metadata.total_hits)
        setLoading(false);
      })
      .catch((err) => {
        console.log(err)
      })
    }, 1000)

    // return clearTimeout(loadingDelay)
  }, [inputValue])

  return (
    <div className={loading ? "loading" : ''}>
      <StyledTitle>
        <h1 className="title" >Search Nasa:</h1>
        <h4>Showing {amountOfResultsShown} results</h4>
      </StyledTitle>
      <StyledHeader>
        <input type="text" placeholder='moon landing' value={inputValue} onChange={onChange} />
        {totalHits > amountOfResultsShown ? 
        <h4>{`Total results: ${totalHits}`}</h4> :
        <h4></h4> }
      </StyledHeader>
      <ResponseMessage responseMessage={responseMessage} />
      <ImageContainer nasaData={imageData} amountOfResultsShown={amountOfResultsShown}/>
    </div>
  )
}

export default App
