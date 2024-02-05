import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory,setselectedCategory]=useState("All")
  function category2(event){
    setselectedCategory(event.target.value)
  }
  function allProduce(){  
    return (      
      <div>
        <li>{items.filter((item)=>item.name ?selectedCategory==="produce":"")}</li>
      </div>
     
    )
  }
  function allDairy(){   
    return(     
      <li>
        {items.filter((item)=>item.name ?selectedCategory==="dairy" :"")}
      </li>
      
    )
  }
  function allDessert(){   
    return (      
      <div>
        <li>{items.filter((item)=>item.name ?selectedCategory==="dessert":"")}</li>
      </div>      
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
