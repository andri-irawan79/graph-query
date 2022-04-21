import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'


Vue.config.productionTip = false

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'https://key-akita-57.hasura.app/v1/graphql',
})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)


new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
