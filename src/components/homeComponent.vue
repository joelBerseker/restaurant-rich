<template>
  <div>
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
  </div>
</template>
<script>
export default {
  name: "home-component",
  data() {
    return {
      slice_items: [
        { title: "Image01", path: "/public/img1.jpg", interval: 1000 },
        { title: "Image02", path: "/public/img2.jpg", interval: 1000 },
        { title: "Image03", path: "/public/img3.jpg", interval: 1000 },
      ],
    };
  },
};
</script>
<style lang=""></style>
