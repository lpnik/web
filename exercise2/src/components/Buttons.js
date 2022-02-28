import React from "react";
import {useState} from 'react';

export default function Buttons(props) {

    const [randomNumber, setRandom] = useState(0);
    const [buttonKarkki, setDescriptionKarkki] = useState(" ");
    const [buttonJaatelo, setDescriptionJaatelo] = useState(" ");
    const [buttonSipsi, setDescriptionSipsi] = useState(" ");
    const [buttonSalmiakki, setDescriptionSalmiakki] = useState(" ");

    const handleQuantityChange = (event) => {
        setRandom(event.target.value);
        console.log(handleQuantityChange);
    }

    const handleDescriptionChange = (event) => {
        setDescriptionKarkki(event.target.value);
        setDescriptionJaatelo(event.target.value);
        setDescriptionSipsi(event.target.value);
        setDescriptionSalmiakki(event.target.value);
        console.log(handleDescriptionChange);
    }

    const buttonClicked = (randomNumber, buttonKarkki, buttonJaatelo, buttonSipsi, buttonSalmiakki) => {
        var maxNumber = 10;
        var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
        console.log(randomNumber);

        var buttonKarkki = ' ei hajuakaan mitä oon tehnyt, mut tekee kuites ees jotain';
        var buttonJaatelo = ' Jäätelöä';
        var buttonSipsi = ' Sipsiä';
        var buttonSalmiakki = ' Salmiakkia';


        props.onAddClick(randomNumber, buttonKarkki, buttonJaatelo, buttonSipsi, buttonSalmiakki);
    }
    
    return(
        <div>
            <h4>Lisää tuote: </h4>

            <button onClick={() => buttonClicked (randomNumber, buttonKarkki) }>
                Karkkia
            </button>
            <button onClick={() => buttonClicked (randomNumber, buttonJaatelo)}>
                Jäätelöä
            </button>
            <button onClick={() => buttonClicked (randomNumber, buttonSipsi)}>
                Sipsiä
            </button>
            <button onClick={() => buttonClicked (randomNumber, buttonSalmiakki)}>
                Salmiakkia
            </button>
        </div>
    );

}