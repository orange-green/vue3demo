<script setup>
import { useMealsStore } from '../../store/meals'

const meals = useMealsStore()
</script>

<template>
    <div class="filter">
        <div class="filter-inner">
            <i class="ri-search-line"></i>
            <input v-model="meals.keyword" class="filter-input" type="text" placeholder="请输入关键字" />
        </div>


    </div>
</template>

<style scoped>
.filter {
    padding: 20rem 40rem;
    border-bottom: 1px solid rgb(153, 153, 153);
}

.filter-inner {
    display: flex;
    align-items: center;
    height: 80rem;

}


.filter-input {
    background-color: rgb(242, 242, 242);
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 40rem;
    outline: none;
    padding: 0 30rem 0 80rem;
}


.filter-inner i {
    font-size: 30rem;
    position: absolute;
    color: rgb(153, 153, 153);
    left: 60rem;

}
</style>