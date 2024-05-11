<script setup lang="ts">
import Meal from "./Meal.vue"
import { useMealsStore } from "../../store/meals";
import { MealDetail } from "./MealDetail.vue"


const meals = useMealsStore()


</script>

<template>
    <div id="meals" class="meals">

        <Meal v-for="item in meals.filterMeals" :meal="item"></Meal>

        <h2 v-if="meals.filterMeals.length == 0">没有找到指定商品</h2>

    </div>
</template>

<style scoped>
.meals {
    height: calc(100vh - 120rem);
    /* padding: 120rem 0; */
    overflow: auto;
}
</style>