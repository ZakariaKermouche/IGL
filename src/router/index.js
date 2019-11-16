import Vue from 'vue'
import Router from 'vue-router'
import Agenda from '../views/Agenda.vue'
import Function1 from '../views/Function1.vue'
import Modifier from '../views/Modifier.vue'


Vue.use(Router)


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
   routes : [
  {
    path: '/agenda',
    name: 'Agenda',
    component: Agenda
  },
  {
    path: '/function1',
    name: 'function1',
    component: Function1
  },
  {
    path:'/modifier',
    name: 'modifier',
    component: Modifier
  }
   ]
})

