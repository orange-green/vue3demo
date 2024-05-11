
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: "/",
        component: import('../components/Meals/Meals.vue')
    },

    {
        path: "/detail",
        component: import('../components/Meals/MealDetail.vue')
    }
]
const router = createRouter(
    {
        history: createWebHistory(),
        routes: routes
    }
)

// 导出
export default router
