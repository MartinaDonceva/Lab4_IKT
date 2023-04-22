<template class="bg-grey">
  <ProductDetails :product="product"/>
</template>

<script setup>
import ProductDetails from "../../components/ProductDetails";

const { id } = useRoute().params
const uri = "https://fakestoreapi.com/products/" + id

const { data: product } = await useFetch(uri, { key:id })

definePageMeta({
  layout: 'products'
})
</script>
<style scoped>
.bg-grey{
  background-color: darkgray;
}
</style>