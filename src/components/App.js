import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
   const [replacer,setReplacer]=useState(false)
   function replacer2(){
    setReplacer((replacer)=>!replacer)
   }
   
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  //const appClass = replacer ? "App dark" : "App light"

  return (
    <div className={replacer ? "APP dark" : "APP light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={replacer2}>{replacer ? "dark " : "light "}mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
