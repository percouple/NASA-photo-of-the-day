import React, {useState} from "react";
import ImageContainer from "./ImageContainer";
import CardSelectScreen from './CardSelectScreen';


export default function ContentDisplay (props) {

    const [selectedCard, setSelectedCard] = useState(null);

    if (selectedCard !== null) {
        return <CardSelectScreen/>
    } else {
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