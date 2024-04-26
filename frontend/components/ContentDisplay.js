import React, {useState} from "react";
import ImageContainer from "./ImageContainer";
import CardSelectScreen from './CardSelectScreen';

export default function ContentDisplay (props) {

    const [selectedCard, setSelectedCard] = useState(null);

    if (props.loading) {
        return <div>
            LOADING
        </div>
    }

    if (selectedCard !== null) {
        return <CardSelectScreen/>
    }

    if (!props.loading) {
        return (
            <ImageContainer
            amountOfResultsShown={props.amountOfResultsShown}
            imageData={props.imageData}
            setLoading={props.setLoading}
            loading={props.loading}
            setSelectedCard={setSelectedCard}
          />
        )
    }
}