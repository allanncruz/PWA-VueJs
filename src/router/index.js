import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import LocalNotifications from '@/components/local-notifications.vue'
import ForeGroundDetection from '@/components/foreground-detection.vue'
import Permissions from '@/components/permissions.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/local-notifications',
      name: 'LocalNotifications',
      component: LocalNotifications
    },
    {
      path: '/foreground-detection',
      name: 'ForeGroundDetection',
      component: ForeGroundDetection
    },
    {
        path: '/permissions',
        name: 'Permissions',
        component: Permissions
    }
  ]
})
