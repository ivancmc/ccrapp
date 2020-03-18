import Firebase from 'firebase/app'
import 'firebase/auth'

export default ({ app, router, Vue, store }) => {
  router.beforeEach((to, from, next) => {
    // Check to see if the route has the meta field "authRequired" set to true
    let authRequired = to.matched.some(route => route.meta.authRequired)

    var isAuthenticated = Firebase.auth().currentUser

    Firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        isAuthenticated = Firebase.auth().currentUser
      } else {
        isAuthenticated = null
      }
    })

    if (authRequired) {
      if (isAuthenticated) {
        // User is already signed in. Continue on.
        next()
      } else {
        // Not signed in. Redirect to login page.
        next('/login')
      }
    } else {
      if ((to.name === 'login') && isAuthenticated) {
        next('/user')
      } else {
        // Doesn't require authentication. Just continue on.
        next()
      }
    }
  })
}
