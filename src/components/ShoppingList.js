import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setselectedCategory]=useState(false)
  function category2(){
    setselectedCategory((selectedCategory)=>!selectedCategory)
  }
  function allProduce(){
   
   const produce=Item.filter(()=>Item.name ?Item.category==="produce":"")
    return (
      <>
      <div>
        <li>{produce}</li>
      </div>
      </>
    )
  }
  function allDairy(){
   const dairy=Item.filter(()=>Item.name ?Item.category==="dairy" :"")
    return(
      <>
      <li>
        {dairy}
      </li>
      </>
    )
  }
  function allDessert(){
   const dessert=Item.filter(()=>Item.name ?Item.category==="dessert":"")
    return (
      <>
      <div>
        <li>{dessert}</li>
      </div>
      </>
    )
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce" onClick={allProduce}>Produce</option>
          <option value="Dairy" onClick={allDairy}>Dairy</option>
          <option value="Dessert" onClick={allDessert}>Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
