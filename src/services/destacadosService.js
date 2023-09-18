// platosService.js

import axios from "axios";

const JSON_URL = "/restaurant-rich/data/destacados.json";
export default {
  async getDestacados() {
    try {
      const response = await axios.get(JSON_URL); // Utiliza una ruta relativa
      return response.data;
    } catch (error) {
      console.error("Error al obtener los platos destacados:", error);
      throw error;
    }
  },
};
