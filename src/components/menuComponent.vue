<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <!-- Sidebar de Categorías -->
      <nav
        id="sidebar"
        class="col-md-3 col-lg-2 d-none d-md-block bg-light sidebar t-5 mr-3 mb-3"
        style="padding: 20px"
      >
        <div class="position-sticky mt-5">
          <ul class="nav flex-colum">
            <li class="nav-item">
              <h3>Categorías</h3>
            </li>
            <li
              v-for="categoria in categorias"
              :key="categoria.id"
              class="nav-item custom-li"
            >
              <a
                class="nav-link custom-a"
                @click="filtrarPorCategoria(categoria.id)"
                :class="{ active: categoriaSeleccionada === categoria.id }"
              >
                {{ categoria.nombre }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <button
        class="navbar-toggler mt-5"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebar"
        aria-controls="sidebar"
        aria-expanded="false"
        aria-label="Toggle sidebar"
        @click="toggleSidebar"
      >
        <span class="navbar-toggler-icon"> </span>
      </button>
      <!-- Lista de Platos -->
      <main class="mt-5 ml-3 col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div
          class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
        >
          <h1 class="h2 ml-3">Menú</h1>
          <button
            @click="mostrarTodosLosPlatos"
            v-if="filtroActivo"
            class="ml-auto btn btn-primary btn-sm"
          >
            Mostrar Todos
          </button>
        </div>

        <div class="row">
          <div
            v-for="plato in platosFiltrados"
            :key="plato.id"
            class="col-lg-4 mb-4"
          >
            <div class="card">
              <img
                :src="plato.imagen"
                class="card-img-top"
                alt="Imagen del Plato"
                style="max-height: 200px"
              />
              <div class="card-body">
                <h5 class="card-title">{{ plato.nombre }}</h5>
                <p class="card-text">{{ plato.descripcion }}</p>
                <p class="card-text">
                  Precio: s/ {{ plato.precio.toFixed(2) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import categoriasService from "@/services/categoriasService";
import platosService from "../services/platosService"; // Ajusta la ruta según tu estructura de carpetas

export default {
  data() {
    return {
      categorias: [], // Aquí debes cargar las categorías desde tu JSON o API
      platos: [], // Aquí debes cargar los platos desde tu JSON o API
      categoriaSeleccionada: null,
      platosFiltrados: [],
      filtroActivo: false,
    };
  },
  computed: {
    platosFiltrados() {
      if (!this.categoriaSeleccionada) {
        return this.platos;
      }
      return this.platos.filter(
        (plato) => plato.categoria_id === this.categoriaSeleccionada
      );
    },
  },
  methods: {
    toggleSidebar() {
      const sidebar = document.getElementById("sidebar");
      if (sidebar) {
        sidebar.classList.toggle("show-sidebar"); // Agrega o quita una clase CSS para mostrar u ocultar el sidebar
      }
    },
    filtrarPorCategoria(categoriaId) {
      this.categoriaSeleccionada = categoriaId;
      this.filtroActivo = true;
    },
    mostrarTodosLosPlatos() {
      // Restaura la lista completa de platos
      this.platosFiltrados = this.platos;
      // Desactiva el filtro
      this.categoriaSeleccionada = null;
      this.filtroActivo = false;
    },
  },
  async mounted() {
    try {
      // Llama al servicio para obtener las categorías
      this.categorias = await categoriasService.getCategorias();
      this.platos = await platosService.getPlatos();
    } catch (error) {
      // Manejo de errores en caso de que la solicitud falle
      console.error("Error al obtener las categorías en el componente:", error);
    }
  },
};
</script>

<style scoped>
/* Estilos personalizados para el sidebar */
#sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 20px;
  overflow-y: auto;
}
/* Estilos personalizados para los elementos <a> en el sidebar */
.custom-category-item {
  /* Estilos generales para los elementos <a> */
  font-size: 16px;
  color: #333;
  /* Otros estilos personalizados según tus preferencias */
}

/* Estilo para el elemento <a> cuando está activo */
.custom-category-item.active {
  /* Estilos específicos para el elemento activo */
  color: #ff5733; /* Cambiar el color de texto cuando está activo */
  font-weight: bold; /* Hacer el texto en negrita cuando está activo */
}

/* Estilos personalizados para los elementos <li> en el sidebar */
.custom-li {
  list-style: none; /* Quitar viñetas de la lista, si las hubiera */
  margin-bottom: 10px; /* Espacio entre elementos <li> */
}

/* Estilos personalizados para los elementos <a> en el sidebar */
.custom-a {
  font-size: 18px; /* Cambiar el tamaño de fuente */
  color: #ff5733; /* Cambiar el color de texto */
  text-decoration: none; /* Quitar subrayado enlaces, si lo deseas */
}

/* Estilos para los elementos <a> cuando están activos */
.custom-a.active {
  font-weight: bold; /* Hacer el texto en negrita cuando está activo */
  color: #007bff; /* Cambiar el color de texto cuando está activo */
}

/* Ajusta los estilos según tus preferencias */
</style>
