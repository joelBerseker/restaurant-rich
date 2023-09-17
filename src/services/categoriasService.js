// categoriasService.js

// Importa la librería axios para realizar peticiones HTTP
import axios from "axios";

// Ruta al archivo JSON que contiene las categorías
const JSON_URL = "../data/categorias.json"; // Reemplaza con la ruta correcta

export default {
  async getCategorias() {
    try {
      // Realiza una solicitud GET para obtener las categorías desde el archivo JSON
      const response = await axios.get(JSON_URL);
      // Devuelve las categorías obtenidas
      return response.data.categorias;
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.error("Error al obtener las categorías:", error);
      throw error;
    }
  },
};
