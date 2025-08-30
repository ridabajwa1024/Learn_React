import React, { useState } from "react";

function List() {
  const [delt, setdelete] = useState([
    "Apple",
    "Banana",
    "Mango",
    "Orange",
  ]);

  // delete function
  const del = (delFruit) => {
    setdelete(delt.filter((fruit) => fruit !== delFruit));
  };

  return (
    <div>
      <ul>
        {delt.map((fruit, index) => (
          <li key={index}>
            {fruit}{" "}
            <button onClick={() => del(fruit)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
