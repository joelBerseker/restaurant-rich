<!-- Promociones.vue -->
<template>
  <div class="promociones-container">
    <h1 class="promociones-title">Promociones del Restaurante</h1>
    <div class="promocion" v-for="plato in platosEnPromocion" :key="plato.id">
      <div class="promocion-image">
        <img :src="plato.imagen" alt="Imagen del plato" />
      </div>
      <div class="promocion-details">
        <h2 class="promocion-name">{{ plato.nombre }}</h2>
        <p class="promocion-description">{{ plato.descripcion }}</p>
        <div class="promocion-prices">
          <p class="original-price">Precio original: ${{ plato.precio }}</p>
          <p class="discounted-price">
            Precio con descuento: ${{
              (plato.precio * (1 - plato.descuento)).toFixed(2)
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import platosService from "@/services/platosService.js";

export default {
  data() {
    return {
      platosEnPromocion: [],
    };
  },
  async created() {
    try {
      // Obtener los platos en promoción utilizando el servicio
      this.platosEnPromocion = await platosService.obtenerPlatosEnPromocion();
      console.log(this.platosEnPromocion);
    } catch (error) {
      console.error("Error al obtener platos en promoción", error);
    }
  },
};
</script>

<style scoped>
.promociones-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.promociones-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

.promocion {
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
}

.promocion-image img {
  max-width: 150px;
  max-height: 150px;
  object-fit: cover;
  margin-right: 10px;
}

.promocion-details {
  flex: 1;
}

.promocion-name {
  font-size: 20px;
  margin: 0;
  color: #333;
}

.promocion-description {
  font-size: 16px;
  color: #666;
}

.promocion-prices {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.original-price {
  font-size: 18px;
  margin: 5px 0;
  text-decoration: line-through;
  color: #999;
}

.discounted-price {
  font-size: 20px;
  margin: 5px 0;
  font-weight: bold;
  color: #ff5733; /* Color de descuento */
}
</style>
