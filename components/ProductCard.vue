<template>
  <div class="card" style="width: 18rem;">
    <img :src="product.image" class="card-img-top" alt="...">
    <hr/>
    <div class="card-body">
      <p class="card-header">{{product.title}}</p>
      <hr/>
      <p class="card-text">{{product.price}}</p>
      <hr/>
      <NuxtLink  :to="`/products/${product.id}`"><button class="btn btn-info w-100">View Details</button></NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>

</style>