<script setup>
// import { defineProps } from "vue";
import Counter from "../UI/Counter.vue"

const props = defineProps(["meal"])
// const meal = props.meal



</script>


<template>
    <div class="meal">
        <div class="img">
            <img :src="props.meal.img" :alt="props.meal.title">
        </div>

    <div class="info">
            <div class="desc">
                <h2>{{ props.meal.title }}</h2>
                <p>{{ props.meal.desc }}</p>
            </div>

            <div class="price-bnt">
                <span class="price">{{ props.meal.price }}</span>
                <Counter></Counter>
            </div>
            <!-- {{ meal.title }}
                                                                                                            {{ meal.desc }}
                                                                                                            {{ meal.price }} -->

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