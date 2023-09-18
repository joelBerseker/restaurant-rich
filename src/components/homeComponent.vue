<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner text-center">
      <div
        class="carousel-item active"
        v-for="item in slice_items"
        :data-bs-interval="item.interval"
      >
        <img :src="item.path" class="d-block w-100" :alt="item.title" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div>
    <div class="container mt-4">
      <!-- Banner de Destacados -->
      <div class="row">
        <div class="row">
          <div class="col-md-12">
            <div class="jumbotron">
              <h1 class="display-4">
                ¡Bienvenidos a nuestro el Establo de Rich!
              </h1>
              <p class="lead">
                Descubre nuestros platos deliciosos y promociones especiales.
              </p>
              <hr class="my-4" />
              <p>
                Realiza una reserva en línea para disfrutar de una experiencia
                culinaria única.
              </p>
              <p class="lead">
                <a
                  class="btn btn-primary btn-lg"
                  :href="dataReserva"
                  role="button"
                  >Reservar mesa</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección de Menú Destacado -->
      <div class="container mt-5">
        <h2>Platos Destacados de la Semana</h2>
        <div
          id="platosDestacadosCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <!-- Indicadores del carrusel -->
          <ol class="carousel-indicators">
            <li
              v-for="(platosDia, dia, index) in platosDestacadosPorDia"
              :key="dia"
              :data-bs-slide-to="index"
              data-target="#platosDestacadosCarousel"
              :class="{ active: index === indiceActivo }"
            ></li>
          </ol>
          <!-- Contenido del carrusel -->
          <div class="carousel-inner">
            <div
              v-for="(platosDia, dia, indice) in platosDestacadosPorDia"
              :key="dia"
              :class="{ active: indice === 0 }"
              class="carousel-item"
            >
              <h3>{{ dia }}</h3>
              <div class="row">
                <div
                  v-for="plato in platosDia"
                  :key="plato.id"
                  class="col-md-6"
                >
                  <div class="card h-100">
                    <img
                      :src="plato.imagen"
                      class="card-img-top"
                      alt="Imagen del Plato"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{{ plato.nombre }}</h5>
                      <p class="card-text">{{ plato.descripcion }}</p>
                      <p class="card-text">Precio: ${{ plato.precio }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#platosDestacadosCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#platosDestacadosCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="container mt-5">
    <!-- Sección de Recomendaciones del Chef -->
    <h2 class="text-center">Recomendaciones del Chef</h2>
    <div class="row">
      <!-- Columna para la imagen del chef -->
      <div class="col-md-6 col-lg-4 order-md-1">
        <img
          src="/restaurant-rich/public/chef.png"
          alt="Imagen del Chef"
          class="img-fluid"
        />
      </div>
      <!-- Columna para las recomendaciones del chef -->
      <div class="col-md-6 col-lg-8 order-md-2">
        <h3>Rocoto Relleno</h3>
        <p>
          Disfruta de nuestro plato estrella, el Rocoto Relleno. Un plato típico
          arequipeño que consiste en rocoto relleno con carne molida y sazonado
          con hierbas aromáticas, acompañado de papas y queso gratinado.
        </p>
        <h3>Chupe de Camarones</h3>
        <p>
          Prueba nuestro Chupe de Camarones, una deliciosa sopa preparada con
          camarones frescos, papas, maíz y queso, sazonada con ají amarillo y
          hierbas locales.
        </p>
        <h3>Solterito Arequipeño</h3>
        <p>
          Para una opción más ligera, te recomendamos nuestro Solterito
          Arequipeño. Una ensalada fresca de habas, queso fresco, maíz, cebolla,
          tomate y rocoto, todo mezclado con una vinagreta de cilantro.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import platosService from "../services/platosService";
import destacadosService from "../services/destacadosService";
export default {
  name: "home-component",
  data() {
    return {
      dataReserva:
        "https://wa.me/+51910172896?text=Quiero%20hacer%20una%20reserva%20en%20el%20establo%20de%20Rich%20para%20el%20dia",
      slice_items: [
        {
          title: "Image01",
          path: "/restaurant-rich/img1.jpg",
          interval: 2000,
        },
        {
          title: "Image02",
          path: "/restaurant-rich/img2.jpg",
          interval: 2000,
        },
        {
          title: "Image03",
          path: "/restaurant-rich/img3.jpg",
          interval: 2000,
        },
      ],
      platosDestacados: [],
      platosDestacadosPorDia: {},
      platos: [],
      indiceActivo: 0,
    };
  },
  async mounted() {
    try {
      // Llama al servicio para obtener las categorías
      this.platosDestacados = await destacadosService.getDestacados();
      this.obtenerPlatosDestacadosPorDia();
      console.log(this.platosDestacadosPorDia);
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.error("Error al obtener las categorías en el componente:", error);
    }
  },
  methods: {
    actualizarIndiceActivo(index) {
      this.indiceActivo = index;
    },
    async obtenerPlatosDestacadosPorDia() {
      for (const dia in this.platosDestacados) {
        const platosDia = this.platosDestacados[dia];
        const platosDestacadosDia = [];

        for (const platoKey in platosDia) {
          const platoId = platosDia[platoKey];
          const plato = await platosService.buscarPlatoPorId(platoId);
          if (plato) {
            platosDestacadosDia.push(plato);
          }
        }

        // Asignamos los platos al objeto platosDestacadosPorDia
        this.platosDestacadosPorDia[dia] = platosDestacadosDia;
      }
    },
  },
};
</script>
<style>
.chef-recomendaciones {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7f7f7; /* Color de fondo */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra */
}

.chef-imagen img {
  width: 150px; /* Tamaño de la imagen del chef */
  border-radius: 50%; /* Para hacer la imagen redonda */
}

.chef-texto {
  flex: 1;
  margin-left: 20px;
}

.chef-texto h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.chef-texto ul {
  list-style: none;
  padding: 0;
}

.chef-texto li {
  font-size: 16px;
  margin-bottom: 8px;
}
</style>
