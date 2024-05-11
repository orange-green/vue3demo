<script setup>
// import { defineProps } from "vue";
import Counter from "../UI/Counter.vue"
import MealDetail from "./MealDetail.vue"
import { useRouter } from "vue-router";

const router = useRouter();
console.log("router=======");
console.log(router);


const props = defineProps(["meal"])
// const meal = props.meal



function goToDetail(url) {
    console.log("跳转到detail页面");
    console.log(url);

    router.push(url);

}

</script>


<template>
    <div class="meal">
        <div class="img" @click="goToDetail('/detail')">
            <img :src="props.meal.img" :alt="props.meal.title">
        </div>

        <div class="info">
            <div class="desc" @click="goToDetail">
                <h2>{{ props.meal.title }}</h2>
                <p>{{ props.meal.desc }}</p>
            </div>

            <div class="price-bnt">
                <span class="price">{{ props.meal.price }}</span>
                <Counter></Counter>
            </div>
        </div>
    </div>
</template>

<style scoped>
.meal {
    display: flex;
    align-items: center;
    height: 400rem;
    border-bottom: 1px rgb(153, 153, 153) solid;
    padding: 0 20rem;
}

.img {
    width: 200rem;
    padding: 0 20rem;
}

.info {
    width: 500rem;
}


.info h2 {
    color: #000;
    font-size: 30rem;
    font-weight: normal;
}

.info p {
    color: #a19f9a;
    font-size: 24rem;
}

.price-bnt {
    display: flex;
    margin-top: 40rem;
    justify-content: space-between;

}

.price {
    font-size: 30rem;
    font-weight: bold;
}

.price::before {
    content: "$";
}
</style>