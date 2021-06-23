import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

   function handleUserInput(event) {
    const userInput = event.target.value;
    console.log("userInput is: ", userInput);
    setSearch(userInput);
  }

  const itemsToDisplay = items
  .filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory; 
  })
  .filter( (item)=>{return item.name.toUpperCase().includes(search.toUpperCase());} )

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleUserInput}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
