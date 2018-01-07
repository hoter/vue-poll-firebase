import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/forms/Login'
import SignUp from '@/components/forms/SignUp'
import HomePage from '@/components/pages/static/HomePage.vue'
import UserMixin from '@/mixins/UserMixin.vue'
import Projects from '@/components/projects/Index'
import Project from '@/components/projects/Project'
import AddProjectForm from '@/components/projects/AddProjectForm'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/projects/:name',
      name: 'project',
      component: Project,
      props: true,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/projects/add',
      name: 'add-projects',
      component: AddProjectForm,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'SignUp',
      component: SignUp
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = UserMixin.methods.getCurrentUser()
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('hello')
  else next()
})

export default router
