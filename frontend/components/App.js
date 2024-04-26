import Title from "./Title";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageContainer from "./ImageContainer";
import styled from "styled-components";
import Subheader from "./Subheader";

const initialNasaData = [];

function App() {
  let [nasaData, setNasaData] = useState(initialNasaData);
  let [imageData, setImageData] = useState([]);
  let [inputValue, setInputValue] = useState("");
  let [loading, setLoading] = useState(false);
  let [totalHits, setTotalHits] = useState(0);
  let [amountOfResultsShown, setAmountOfResultsShown] = useState(10);

  const url = "https://images-api.nasa.gov/search";
  const params = new URLSearchParams({
    description: inputValue,
    media_type: "image",
  });

  // Input value change handler
  useEffect(() => {
    axios
      .get(`${url}?${params.toString()}`)
      .then((res) => {
        const { collection } = res.data;
        setNasaData(collection);
        setImageData(collection.items);
        setTotalHits(collection.metadata.total_hits);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [inputValue]);

  return (
    <div className={loading ? "loading" : ""}>
      <Title
        amountOfResultsShown={setAmountOfResultsShown}
        setAmountOfResultsShown={setAmountOfResultsShown}
        totalHits={totalHits}
      />
      <Subheader
        setLoading={setLoading}
        totalHits={totalHits}
        setInputValue={setInputValue}
        inputValue={inputValue}
      />
      <ImageContainer
        amountOfResultsShown={amountOfResultsShown}
        nasaData={imageData}
        setLoading={setLoading}
        loading={loading}
      />
    </div>
  );
}

export default App;
