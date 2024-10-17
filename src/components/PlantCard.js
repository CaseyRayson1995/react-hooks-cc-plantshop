import React from "react";

function PlantCard({ plant, onToggleInStock }) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {plant.inStock ? (
        <button className="primary" onClick={() => onToggleInStock(plant.id)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => onToggleInStock(plant.id)}>Sold Out</button>
      )}
    </li>
  );
}

export default PlantCard;
