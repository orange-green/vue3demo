<script setup>
import { createApp } from "vue";
import { createPinia } from 'pinia'

import Meals from "./components/Meals/Meals.vue";
import MealsFilter from "./components/MealsFilter/MealsFilter.vue";

const pinia = createPinia()

const app = createApp()

app.use(pinia)

app.mount('#app')

// console.log(meals.data);

</script>

<template>
  <div id="app"></div>

  <!-- <i class="ri-home-4-line"></i> -->
  <div id="meals">
    <MealsFilter></MealsFilter>
    <Meals></Meals>
  </div>
</template>

<style scoped></style>
