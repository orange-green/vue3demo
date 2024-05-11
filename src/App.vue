<script setup>
import { createApp } from "vue";
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import Meals from "./components/Meals/Meals.vue";
import MealsFilter from "./components/MealsFilter/MealsFilter.vue";

import router from "./router"

// console.log("app.vue中的router");
// console.log(router);


const pinia = createPinia()

const app = createApp()

// 使用pinia作为缓存存储
app.use(pinia)

// 使用element-plus ui框架
app.use(ElementPlus)

// 使用路由
app.use(router)

// router.isReady().then(() => app.mount('#app'))

app.mount('#app')

// console.log(meals.data);

</script>

<template>
  <div id="app"></div>

  <!-- <i class="ri-home-4-line"></i> -->
  <div id="meals">
    <MealsFilter></MealsFilter>
    <Meals></Meals>

    <!-- <router-view></router-view>
    <div>
      <router-link to="/">home</router-link>
      <router-link to="/detail">detail</router-link>
    </div> -->
  </div>


</template>

<style scoped></style>
