<template>
  <div class="home">
    <HelloWorld msg="Todo Use Graph Query"/>
    <div class="input-group mb-3">
      <input type="number" placeholder="Masukkan ID" class="form-control" v-model="userId" required>
    </div>
    <div v-if="$apollo.loading">Loading...</div>
    <div class="items">
      <ol v-if="this.userId == ''" class="list-group list-group-numbered">
        <li v-for="item in activity" :key="item.id" class="list-group-item">{{item.activity}}</li>
      </ol>
      <ol v-else class="list-group">
        <li class="list-group-item list-none">{{activity_by_pk ? `${activity_by_pk.activity}`: 'Not Found'}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import gql from 'graphql-tag'
// import GET_BY_ID from '../graphql/GetById.gql'

export default {
  name: 'HomeView',
  data() {
    return {
      userId: '',
      activity_by_pk: '',
      activity: ''
      
    };
  },
  components: {
    HelloWorld
  },
  apollo: {
    activity: {
      query: gql`query MyQuery {
        activity{
          id
          activity
        } 
      }`,
    },
    activity_by_pk: {
      query: gql`query MyQuery($userId: Int!) {
          activity_by_pk(id: $userId) {
              id
              activity
          }
      }`,
      variables () {
        return {
          userId: parseInt(this.userId),
        };
      },
    }
  },
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

ol li, ul li {
  width: 420px;
  height: 40px;
}

ul li {
  text-align: center;
}
</style>
