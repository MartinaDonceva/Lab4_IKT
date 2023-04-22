<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="container">
        <NuxtLink class="navbar-brand fw-bold" to="/">Nuxt Dojo</NuxtLink>
        <div class="text-center">
          <ul class="navbar-nav ms-lg-auto mb-2 mb-0 ms-0">
            <li class="nav-item">
              <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/about">About</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="/products">Products</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <div class="container mx-auto p-4">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>