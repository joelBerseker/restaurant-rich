<template>
  <div
    class="container contact-page d-flex justify-content-center align-items-center vh-100"
  >
    <div class="row">
      <div class="col-md-6 mr-2 align-center">
        <h1>Contactos de Restaurant Campestre Rich</h1>
        <p class="align-middle">
          ¡Esperamos escuchar de ti pronto! Puedes ponerte en contacto con
          nosotros utilizando el formulario o la información de contacto a
          continuación:
        </p>
        <ul class="list-unstyled mt-4">
          <li class="mb-3">
            <i class="bi bi-geo-alt-fill"></i>
            Dirección: Calle de la Tienda, Número 123
          </li>
          <li class="mb-3">
            <i class="bi bi-telephone-fill"></i>
            Teléfono: (123) 456-7890
          </li>
          <li class="mb-3">
            <i class="bi bi-envelope-fill"></i>
            Correo Electrónico: info@tutienda.com
          </li>
        </ul>
      </div>
      <div class="col-md-6">
        <h2>Formulario de Contacto</h2>
        <form @submit.prevent="submitForm">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
              required
            />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              required
            />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Mensaje:</label>
            <textarea
              class="form-control"
              id="message"
              v-model="message"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact-component",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes agregar la lógica para enviar el formulario
      // Puedes enviar los datos a un servidor o realizar otras acciones aquí.
      console.log("Form submitted");
      console.log("Name:", this.name);
      console.log("Email:", this.email);
      console.log("Message:", this.message);
    },
  },
};
</script>
<style scoped>
.contact-page {
  margin-top: 30px;
}

.fa {
  margin-right: 5px;
}
</style>
