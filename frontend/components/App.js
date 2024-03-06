import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ResponseMessage from './ResponseMessage';
import ImageContainer from './ImageContainer';

const initialMessage = '';                         
const initialNasaData = []    

function App() {

  let [nasaData, setNasaData] = useState(initialNasaData);
  let [imageData, setImageData] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let [loading, setLoading] = useState(false);
  let [responseMessage, setResponseMessage] = useState(initialMessage);
  let [totalHits, setTotalHits] = useState(0);

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
      <section>
        <input type="text" placeholder='moon landing' value={inputValue} onChange={onChange} />
        <h2>{totalHits}</h2>
      </section>
      <ResponseMessage responseMessage={responseMessage} />
      <ImageContainer nasaData={imageData}/>
    </div>
  )
}

export default App
