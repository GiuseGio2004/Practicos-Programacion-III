import { useEffect, useState } from "react";
import ListaTarjetas from "./ListaTarjetas";
import axios from "axios";

const TraerPersonas = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/personas")
      .then(response => setPersonas(response.data))
      .catch(error => console.error("Error al traer personas:", error));
  }, []);

  return (
    <div>
      <h1> Personas</h1>
      <ListaTarjetas personas={personas} />
    </div>
  );
};

export default TraerPersonas;