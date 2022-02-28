import './App.css';
import Title from './components/Title';
import ShoppingListContentTest from './components/ShoppingListContentTest';
import { useState } from 'react';

//App on korkein mahdollinen komponentti, juurikomponentti josta React käynnistyy
function AppTesti() {

    const [counterValue, setCounterValue] = useState(0);
    const [ shoppingListItems, setShoppingListItems ] = useState([
      {
        id: 1,
        name: " Milk",
        qty: 5,
        isChecked: true
      },
      {
        id: 2,
        name: " Bananas",
        qty: 6,
        isChecked: false
      },
      {
        id: 3,
        name: " Bread",
        qty: 3,
        isChecked: false
      },
      {
        id: 4,
        name: " Eggs",
        qty: 3,
        isChecked: false
      }
    ]);

    const handleItemCheckedToggle = (item) => {
      console.log("Togglin item status");
      console.log(item);

      let newShoppingListItems = [...shoppingListItems];

      let itemClickedIndex = newShoppingListItems.findIndex(i => item.id == i.id);
      if(itemClickedIndex != -1) {

        let newElement = {...newShoppingListItems[itemClickedIndex]}
        newElement.isChecked = !newElement.isChecked;
        newShoppingListItems[itemClickedIndex] = newElement;
        setShoppingListItems(newShoppingListItems);
      }
    }
    //returnin jälkeen jsx osuus ja sinne laitetaan js muuttujat/funktiot aaltosuluilla
    //listItems niminen propsi
    return (
      <div className="AppTesti">
        <Header />
        <Title />
        <div>Laskuri { counterValue }</div>
        <button onClick ={ () => setCounterValue(counterValue + 1)}>Increase counter</button>
        <ShoppingListContentTest listItems={shoppingListItems} itemClickedEvent = { handleItemCheckedToggle } />
    </div>
    );
}

export default AppTesti;  
    
