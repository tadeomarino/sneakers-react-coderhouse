import React, { useState, useContext } from "react";
import CartContext from "../../context/cartContext.js";
import AddToCart from "../AddToCart/AddToCart.jsx";
import "./ItemCount.css";

function ItemCount({ initial, stock, item, id}) {
  
  const [count, setCount] = useState(initial);
  
  const { addProduct } = useContext(CartContext);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count) {
      addProduct(item, count);
      alert(`Agregaste ${count} ${item.title} ${item.id} al carrito.`);
    }
  };

  return (
    <div className="container">
      <div className="flex-container">
        <button className="decrement-button" onClick={handleDecrement}>
          -
        </button>
        <p className="count">Seleccionaste {count} ítems</p>
        <button className="increment-button" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="button-container">
        <AddToCart id={id} handleAdd={handleAdd}/>
      </div>
    </div>
  );
}

export default ItemCount;
