import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LocalNotifications from '@/components/local-notifications.vue'
import ForeGroundDetection from '@/components/foreground-detection.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
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
    }
  ]
})
