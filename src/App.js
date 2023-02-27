import './App.css';

import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState ("");
  const [toDos, setToDos] = useState ([]);

  // always include with your forms 
  const handleSubmit = (e) =>{
    e.preventDefault();
    setToDos([...toDos, newItem]);
    setNewItem("");
  };

 
  return(
    <div>

      {/* FORM  */}

      <div>
        <form onSubmit={(e) => {
            handleSubmit(e);
          }}>

            <input type="text" value={newItem} 
            onChange={(e) => {
              setNewItem(e.target.value);
            }}/>
          <div>
            <button>Add!</button>
          </div>
        </form>
      </div>

      {/* DISPLAY LIST  */}
      <div>  
        {toDos.map((todo, i) => {
          return (
            // adding the key ensures if the same item is added twice, it can be distingueshed. 
            <div key={i}> 
              <span>{todo}</span>
              <button>Delete</button>
            </div>
          );  
        })}
      </div>
    </div>  
  );
}

export default App;
