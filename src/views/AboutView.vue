<template>
  <div class="container about-page my-5 text-center">
    <!-- Espacio para la imagen -->
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <img
          src="/restaurant-rich/public/about.jpg"
          alt="Imagen del Restaurante"
          class="img-fluid rounded-circle mb-4"
        />
      </div>
    </div>

    <!-- Contenido centrado -->
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="display-4 mb-4">Acerca de {{ nombreRestaurante }}</h1>
        <p class="lead">
          {{ nombreRestaurante }} es mucho más que un lugar para comer. Es el
          resultado de una pasión compartida por la gastronomía y la naturaleza.
          Fundado hace más de una década, nuestro restaurante campestre ha
          evolucionado y crecido, pero nuestra dedicación a la comida de calidad
          y al entorno natural que nos rodea ha permanecido inalterada.
        </p>
      </div>
    </div>

    <div class="row justify-content-center mt-5">
      <div class="col-lg-8">
        <h2 class="mb-4">Nuestra Filosofía</h2>
        <p>
          En {{ nombreRestaurante }}, creemos en la simplicidad y la
          autenticidad. Nuestra filosofía culinaria se basa en tres pilares
          fundamentales:
        </p>
        <ul>
          <li>
            <strong>Ingredientes Locales:</strong> Trabajamos estrechamente con
            agricultores locales y proveedores para ofrecer ingredientes frescos
            y de la más alta calidad en cada plato que servimos. Nuestro menú
            cambia con las estaciones para aprovechar los productos en su mejor
            momento.
          </li>
          <li>
            <strong>Cocina Creativa:</strong> Nuestros talentosos chefs se
            inspiran en las tradiciones culinarias locales y las combinan con
            técnicas innovadoras para crear platos que sorprenden y deleitan a
            nuestros comensales.
          </li>
          <li>
            <strong>Entorno Natural:</strong> Situado en medio de exuberantes
            paisajes campestres, El Establo de Rich ofrece un ambiente único
            donde los comensales pueden disfrutar de sus comidas rodeados de la
            belleza natural de la región.
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombreRestaurante: "El Establo de Rich", // Cambia esto al nombre real de tu restaurante
    };
  },
};
</script>

<style scoped>
/* Estilos personalizados */
.about-page {
  padding-top: 80px; /* Ajusta el valor según la altura de tu navbar */
}

/* Estilo para la imagen */
.img-fluid {
  max-width: 100%;
  height: auto;
  border: 5px solid #fff; /* Agrega un borde blanco alrededor de la imagen */
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2); /* Agrega una sombra ligera a la imagen */
}

/* Estilo para el título principal */
.display-4 {
  font-weight: bold;
  color: #4caf50; /* Cambia el color del título principal */
}

/* Estilo para el subtítulo */
h2 {
  font-size: 1.8rem; /* Aumenta el tamaño del subtítulo */
  font-weight: bold;
  color: #333; /* Cambia el color del subtítulo */
}

/* Estilo para el párrafo de introducción */
.lead {
  font-size: 1.25rem;
  color: #666; /* Cambia el color del texto de introducción */
  margin-bottom: 30px;
}
</style>
