// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import {firebaseConfig} from '@/configs/private/firebase.config.js'

Vue.config.productionTip = false

// Don't initialize the app until firebase callback is fired
// There might a problem with server side rendering or prerendering
// Maybe will have to use timeout
const unsubscribe = firebase.initializeApp(firebaseConfig).auth().onAuthStateChanged(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })

  // remove this listener so that we aren't trying to make new vue objects
  // every time the auth state changes.
  unsubscribe()
})
