import Vue from 'vue';
import VueRouter from 'vue-router';
import workList from '@/views/workList.vue';
import workAdd from '@/views/workAdd.vue';
import workDetail from '@/views/workDetail';
import login from '@/views/login.vue';
import myPage from '@/views/myPage.vue';
import myPageEdit from '@/views/myPageEdit.vue';
import artistShow from '@/views/artistShow.vue';
import artistCardList from '@/views/artistCardList.vue';

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
  },
  {
    path: '/my-page-edit',
    component: myPageEdit
  },
  {
    path: '/artist-show',
    component: artistShow
  },
  {
    path: '/artist-card-list',
    component: artistCardList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
