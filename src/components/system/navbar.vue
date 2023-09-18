<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-with-margin"
  >
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand"
        >Restaurant Campestre Rich</RouterLink
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li v-for="item in nav_items" class="nav-item">
            <i :class="item.icon"></i>
            <RouterLink
              :to="item.path"
              class="navbar-brand"
              @click="closeNavbar"
              >{{ item.title }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "nabar",
  data() {
    return {
      appTitle: "My Restaurant",
      sidebar: false,
      nav_items: [
        { title: "Inicio", path: "/", icon: "bi bi-tag-fill" },
        { title: "Carta", path: "/menu", icon: "bi bi-book-fill" },
        { title: "Promociones", path: "/promotion", icon: "bi bi-tag-fill" },
        { title: "Nosotros", path: "/about", icon: "bi bi-info-circle-fill" },
        { title: "Contactanos", path: "/contact", icon: "bi bi-envelope-fill" },
      ],
    };
  },
  methods: {
    toggleNavbar() {
      // Obtiene el elemento del menú de navegación utilizando Bootstrap
      const navbar = document.querySelector(".navbar-collapse");

      // Verifica si el menú está abierto o cerrado
      const isOpen = navbar.classList.contains("show");

      // Si el menú está abierto, ciérralo; de lo contrario, ábrelo
      if (isOpen) {
        navbar.classList.remove("show"); // Cierra el menú
      } else {
        navbar.classList.add("show"); // Abre el menú
      }
    },
    closeNavbar() {
      // Cierra el menú de navegación utilizando Bootstrap
      const navbar = document.querySelector(".navbar-collapse");
      if (navbar.classList.contains("show")) {
        // Si el menú está abierto, lo cerramos
        navbar.classList.remove("show");
      }
    },
  },
};
</script>
<style scoped>
/* Estilos personalizados según tus preferencias */
.navbar-with-margin {
  margin-bottom: 30px; /* Ajusta el valor según la altura deseada */
}
@media (max-width: 768px) {
  .navbar-collapse {
    max-height: calc(100vh - 56px); /* Ajusta la altura según tus necesidades */
    overflow-y: auto; /* Agrega una barra de desplazamiento si es necesario */
  }
}
</style>
