import './App.css';
import Title from './components/Title';
import ShoppingListContent from './components/ShoppingListContent';
import Buttons from './components/Buttons';
import { useState } from 'react';

//App on korkein mahdollinen komponentti, juurikomponentti josta React käynnistyy
function App() {

    //haetaan ostoslistan sisältö, joka on tehty taulukkoon
    const [ shoppingListItems, setShoppingListItems ] = useState([
      {
        id: 1,
        name: " Milk",
        qty: 5,
        unit: "ltr"
      },
      {
        id: 2,
        name: " Bananas",
        qty: 6,
        unit: "pcs"
      },
      {
        id: 3,
        name: " Bread",
        qty: 3,
        unit: "x"
      },
      {
        id: 4,
        name: " Eggs",
        qty: 3,
        unit: "x"
      }
    ]);

    const handleButtonCheckedToggle = (item) => {
      console.log(item);

    let newShoppingListItems = [...shoppingListItems];

    let buttonClickedIndex = newShoppingListItems.findIndex(i => item.id == i.id);
      if(buttonClickedIndex != -1) {

        let newElement = {...newShoppingListItems[buttonClickedIndex]}
        newShoppingListItems[buttonClickedIndex] = newElement;
        setShoppingListItems(newShoppingListItems);
      }
    }

    const onListAddition = (randomNumber, buttonKarkki, buttonJaatelo, buttonSipsi, buttonSalmiakki) => {
      console.log('onListAddition');
      console.log(randomNumber, buttonKarkki, buttonJaatelo, buttonSipsi, buttonSalmiakki);

      let newShoppingListItems = [...shoppingListItems,{
          id: shoppingListItems.leght + 1,
          name: buttonKarkki || buttonJaatelo || buttonSipsi || buttonSalmiakki,
          qty: randomNumber,
          isChecked: false
      }];

      setShoppingListItems(newShoppingListItems);
    }

    return (
      <div className="App">
        <Title />
        <ShoppingListContent listItems={shoppingListItems} buttonClickedEvent = {handleButtonCheckedToggle} />
        <Buttons onAddClick={ onListAddition }/>
        
    </div>
    );
}

export default App;
