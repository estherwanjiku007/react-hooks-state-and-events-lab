import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
   const [replacer,setReplacer]=useState(false)
   function replacer2(){
    setReplacer((replacer)=>!replacer)
   }
   const [replacer3,setReplacer3]=useState(false) 
   function replacer4(){
    setReplacer3((replacer3)=>!replacer3)
   }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = false ? "App dark" : "App light"

  return (
    <div className={replacer ? "App dark":"App light"}>
      <header>
        <h2>Shopster</h2>
        <button>{replacer3 ? "DARK MODE" : "LIGHT"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
