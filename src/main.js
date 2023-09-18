import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Importa los estilos de Bootstrap
import "bootstrap"; // Importa el script de Bootstrap
import "./assets/css/base.css";
import "./assets/css/mod-bootstrap.css";
import "./assets/css/mod-other.css";
import "./assets/css/main.css";

import axios from "axios";
axios.defaults.baseURL = "/";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
