import React, { useState } from "react";
import ImageContainer from "./ImageContainer";
import CardSelectScreen from "./CardSelectScreen";

export default function ContentDisplay(props) {
  
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <>
      {selectedCard !== null ? (
        <CardSelectScreen
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          imageData={props.imageData}
        />
      ) : (
        <></>
      )}
      <ImageContainer
        amountOfResultsShown={props.amountOfResultsShown}
        imageData={props.imageData}
        setLoading={props.setLoading}
        loading={props.loading}
        setSelectedCard={setSelectedCard}
        selectedCard={selectedCard}
      />
    </>
  );
}
