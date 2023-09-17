import "./assets/css/base.css";
import "./assets/css/mod-bootstrap.css";
import "./assets/css/mod-other.css";
import "./assets/css/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import axios from "axios";
axios.defaults.baseURL = "/";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
