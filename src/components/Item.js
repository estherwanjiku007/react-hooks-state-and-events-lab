import React,{useState} from "react";
import item from "../data/items"
function Item({ name=item.name, category=item.category }) {
      const[Buttons,setButtons]=useState(false)
      function Items2(){
    setButtons((Buttons)=>!Buttons)
  }
  return (
    <li className={Buttons ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={Items2}>Add to Cart</button>
    </li>
  );
}

export default Item;
