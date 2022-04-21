<template>
  <div class="home">
    <HelloWorld msg="Todo Use Graph Query"/>
    <div class="input-group mb-3">
      <input type="number" placeholder="Masukkan ID" class="form-control" v-model="searchKeyword">
      <button class="btn btn-success btn-outline-dark text-white">Search</button>
    </div>
    <div class="items">
      <ol class="list-group list-group-numbered">
        <li v-for="item in activity" :key="item.id" class="list-group-item">{{item.activity}}</li>
      </ol>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import gql from 'graphql-tag'

export default {
  name: 'HomeView',
  data() {
    return {
      searchKeyword: ''
    };
  },
  components: {
    HelloWorld
  },
  apollo: {
    activity: gql`query MyQuery {
      activity{
        id
        activity
      } 
    }`,
  }
}
</script>

<style scoped>
/* Something here.. */
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

ol li {
  width: 420px;
}
</style>
