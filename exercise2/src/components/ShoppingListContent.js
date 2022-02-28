import React from 'react';
//propsit tulevat funktion parametrina
//jos data tulee propsien kautta komponentille, propsissa olevaa dataa ei voi muuttaa propsin kautta
export default function ShoppingListContent(props) {



  return (
    <div>
      <ul>
          {
            props.listItems.map((item, index) => {
              return <li key={index}>{ item.qty }{ item.unit }{ item.name } </li>
            })
          }
      </ul>
    </div>)
}
