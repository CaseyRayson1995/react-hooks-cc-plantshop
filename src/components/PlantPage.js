
import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    //still a work in progess ;earning await 
    const fetchPlants = async () => {
      try {
        const response = await fetch("http://localhost:6001/plants");
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error("Error fetching plants:", error);
      }
    };
    
    // Call the async function
    fetchPlants();
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function toggleInStock(id) {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  }

  function handleSearch(term) { 
    setSearchTerm(term);
  }

  
  const displayedPlants = plants.filter((plant) =>
    plant.name ? plant.name.toLowerCase().includes(searchTerm.toLowerCase()) : false
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} /> 
      <PlantList plants={displayedPlants} onToggleInStock={toggleInStock} /> 
    </main>
  );
}

export default PlantPage;

