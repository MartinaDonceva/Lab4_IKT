<template class="bg-grey">
  <div class="container mt-5">
    <hr/>
    <h2 class="text-center text-bg-dark text-white">Products</h2>
    <hr/>
    <div class="row mt-5">
      <div v-for="p in products" class="col col-12 col-md-6 col-lg-4 mb-4" :key="p.id">
        <ProductCard :product="p"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from "../../components/ProductCard";

definePageMeta({
  layout: 'products'
})
const {data: products} = await useFetch('https://fakestoreapi.com/products')
</script>
<style scoped>
.bg-grey {
  background-color: darkgray;
}
</style>