import Vue from 'vue';
import VueRouter from 'vue-router';
import workList from '@/views/workList.vue';
import workAdd from '@/components/workAdd.vue';
import workDetail from '@/components/workDetail';
import login from '@/views/login.vue';
import myPage from '@/components/myPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: workList
  },
  {
    path: '/work-add',
    component: workAdd
  },
  {
    path: '/work-detail',
    component: workDetail
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/my-page',
    component: myPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
