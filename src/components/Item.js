import React,{useState} from "react";
//import item from "../data/items"
function Item({ name, category }) {
      const[Buttons,setButtons]=useState("add")      
      function Items2(){
    if(Buttons==="add"){
      const Buttons2="in-cart remove"
      setButtons(Buttons2)
    }
    else{
        const Buttons3='add'
        setButtons(Buttons3)
    }
  }
  
  return (
    <li className={ Buttons  }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={Buttons} onClick={Items2}>{Buttons==="all"? "Add to Cart" :"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
