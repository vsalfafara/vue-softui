import VueRouter from 'vue-router'
import Card from './components/Card.vue'
import Button from './components/Button.vue'
import List from './components/List.vue'

const routes = [
    {
        path: '/card',
        component: Card
    },
    {
        path: '/button',
        component: Button
    },
    {
        path: '/list',
        component: List
    }
]

const MainRouter = new VueRouter({
    routes,
    mode: 'history'
})

export default MainRouter