<template>
  <div class="container mt-5">
    <div class="row mt-5">
      <div class="col-lg-6">
        <img :src="product.image" class="card-img-top h-75 w-75" alt="...">
      </div>
      <div class="col-lg-6 justify-content-center mt-lg-5">
        <h2>{{ product.title }}</h2>
        <p class="text-danger mt-2">{{ product.price }}</p>
        <p class="mt-5">{{ product.description }}</p>
        <button class="btn btn-success w-50 mt-4">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetails"
}
</script>

<script setup>
const {product} = defineProps(['product'])
</script>

<style scoped>

</style>