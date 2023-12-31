// platosService.js

import axios from "axios";

const JSON_URL = "/restaurant-rich/data/platos.json";
export default {
  async getPlatos() {
    try {
      const response = await axios.get(JSON_URL); // Utiliza una ruta relativa
      return response.data.platos;
    } catch (error) {
      console.error("Error al obtener los platos:", error);
      throw error;
    }
  },
  async obtenerPlatosEnPromocion() {
    try {
      const response = await axios.get(JSON_URL);
      // Filtrar los platos en promoción en el lado del cliente
      const platos = response.data.platos;
      const platosEnPromocion = platos.filter(
        (plato) => plato.promotion === true
      );
      return platosEnPromocion;
    } catch (error) {
      throw error;
    }
  },
  async buscarPlatoPorId(platoId) {
    try {
      const response = await axios.get(JSON_URL);
      const platos = response.data.platos;
      const platoEncontrado = platos.find((plato) => plato.id === platoId);
      if (platoEncontrado) {
        return platoEncontrado;
      } else {
        throw error;
      }
    } catch (error) {
      throw error;
    }
  },
};
