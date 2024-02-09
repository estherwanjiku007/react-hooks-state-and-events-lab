import React,{useState} from "react";
//import item from "../data/items"
function Item({ name, category }) {
      const[Buttons,setButtons]=useState(false)
      const [myButton,setMyButton]=useState(false)
      function Items2(){
    setButtons(()=>!Buttons)
  }
  function AllButtons(event,id){
     setMyButton((myButton)=>!myButton)
  }
  return (
    <li className={Buttons ? "in-cart" : "" }>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={Items2}>{myButton? "Add to Cart" :"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
