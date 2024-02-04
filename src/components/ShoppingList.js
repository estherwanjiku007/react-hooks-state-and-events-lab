import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setselectedCategory]=useState("All")
  function category2(event){
    setselectedCategory(event.target.value)
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
          <option value="All" onClick={category2}>Filter by category</option>
          <option value="Produce" onChange={allProduce}>Produce</option>
          <option value="Dairy" onChange={allDairy}>Dairy</option>
          <option value="Dessert" onChange={allDessert}>Dessert</option>
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
