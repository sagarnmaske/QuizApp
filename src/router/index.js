import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue"
import QuizView from "../views/QuizView.vue"
import Login from "../components/Login.vue"
import Register from "../components/Register.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:"/",
            name:"login",
            component:Login

        },
        {
            path:"/register",
            name:"register",
            component:Register
        },
        {
            path:"/home",
            quizes:"quizes",
            component:QuizesView
        },
        {
            path:"/quiz/:id",
            quizes:"quiz",
            component:QuizView
        }
    ]
})
export default router