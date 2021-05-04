import React from "react";

function List(props) {
  var notPurchased = props.groceries.filter(grocery => !grocery.purchased)
  return (
    <ul className="list-group">

      {
        notPurchased.map(item => (
          <li className="list-group-item" key={item.id}>
            {item.name}
          </li>
        ))
      }
    </ul>
  );
}

export default List;
