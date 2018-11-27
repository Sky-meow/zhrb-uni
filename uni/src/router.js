import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './components/index'
import Journalism from './components/Journalism'

Vue.use(VueRouter)

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes: [
			{path: '/index',component: index},
			{path: '/Journalism',component: Journalism},
  ]
});

export default router;
