import { defineStore } from "pinia"

export const useMealsStore = defineStore("meals", {
    state: () => ({
        data: [
            {
                id: "1",
                title: "牛肉堡",
                desc: "百分百纯牛肉搭配爽脆酸瓜洋葱粒",
                price: 12,
                img: "/images/meals/1.jpg"
            },
            {
                id: "2",
                title: "鸡肉堡",
                desc: "百分百纯鸡肉搭配爽脆酸瓜洋葱粒",
                price: 12,
                img: "/images/meals/1.jpg"
            },
            {
                id: "3",
                title: "巨无霸",
                desc: "百分百纯牛肉+鸡肉搭配爽脆酸瓜洋葱粒",
                price: 12,
                img: "/images/meals/1.jpg"
            },
            {
                id: "4",
                title: "汉堡包",
                desc: "百分百纯牛肉搭配爽脆酸瓜洋葱粒",
                price: 12,
                img: "/images/meals/1.jpg"
            },
            {
                id: "5",
                title: "三层塔堡",
                desc: "百分百纯牛肉搭配爽脆酸瓜洋葱粒",
                price: 12,
                img: "/images/meals/1.jpg"
            }
        ],
        keyword: ""
    }),

    getters: {
        filterMeals: state => {
            return state.data.filter((item) => item.title.indexOf(state.keyword) != -1)
        }
    }

}
)