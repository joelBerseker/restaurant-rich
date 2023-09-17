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
            <RouterLink :to="item.path" class="navbar-brand">{{
              item.title
            }}</RouterLink>
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
      // Implementa la función de toggling según tus necesidades
    },
  },
};
</script>
<style scoped>
/* Estilos personalizados según tus preferencias */
.navbar-with-margin {
  margin-bottom: 20px; /* Ajusta el valor según la altura deseada */
}
</style>
