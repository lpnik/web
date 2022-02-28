import React from 'react';
//propsit tulevat funktion parametrina
//jos data tulee propsien kautta komponentille, propsissa olevaa dataa ei voi muuttaa propsin kautta
export default function ShoppingListContentTest(props) {

    function onListItemClick(element) {
        props.itemClickedEvent(element);
    }



  return (
    <div>
      <ul>
          {
            props.listItems.map((item, index) => {
              return <li onClick={ () => onListItemClick(item)} key={index} className={ item.isChecked ? "isChecked" : null}>
                        { item.qty }{ item.unit }{ item.name } 
                    </li>
            })
          }
      </ul>
    </div>)
}