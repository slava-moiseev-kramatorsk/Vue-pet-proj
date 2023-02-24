import Vue from 'vue'
import VueRouter from 'vue-router'
import ListPage from "@/components/children/ListPage";
import NewBook from "@/components/children/NewBook";
import HomePage from '@/components/children/HomePage'
import EditBook from "@/components/children/EditBook";
import ShowBook from "@/components/children/ShowBook";
import Login from "@/components/children/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/list-page',
    name: 'listPage',
    component: ListPage
  },
  {
    path: '/new-book',
    name: 'newBook',
    component: NewBook

  },
  {
    path: '/login-page',
    name: 'loginPage',
    component: Login

  },
  {
    path: '/edit-book/:id',
    name: 'editBook',
    component: EditBook,
    props: true,

  },
  {
    path: '/show-book/:id',
    name: 'showBook',
    component: ShowBook,
    props: true,

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
