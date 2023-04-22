<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container justify-content-center">
        <NuxtLink class="navbar-brand fw-bold" to="/">Nuxt Dojo</NuxtLink>
      </div>
    </nav>
  </header>
  <div>
    <slot/>
  </div>
  <footer>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item">
          <NuxtLink class="nav-link" aria-current="page" to="/">Home</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/about">About</NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink class="nav-link" to="/products">Products</NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "products"
}
</script>

<style scoped>

</style>