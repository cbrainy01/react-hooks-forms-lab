import React, { useState } from "react";
import { v4 as uuid } from "uuid";



function ItemForm(/**props*/{onItemFormSubmit}) {

  const [categorySelection, setCategorySelection] = useState("Produce");
  const [itemName, setItemName] = useState("");

  function handleCategoryChange(event) {
    setCategorySelection(event.target.value);
  }
  function handleNameChange(event) {
    setItemName(event.target.value)
  }
  function handleSubmit(event) {
    event.preventDefault();
    
    const newItem = {
      id: uuid(),
      name: itemName,
      category: categorySelection,
    } 

    onItemFormSubmit(newItem);
  }

  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange} />
      </label>

      <label>
        Category:
        <select onChange={handleCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
