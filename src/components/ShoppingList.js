import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  console.log(items)
  const [filterBy2, setFilter] = useState("All")

  function handleFilter(e){
   
    setFilter(e.target.value)
  }

  
  const filteredItems = items.filter(item => {
    if(filterBy2=== "All"){
      return true
    }else{
      return item.category === filterBy2
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleFilter}>
        <select name="filter">
          <option value="All" >Filter by category</option>
          <option value="Produce" >Produce</option>
          <option value="Dairy" >Dairy</option>
          <option value="Dessert" >Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
