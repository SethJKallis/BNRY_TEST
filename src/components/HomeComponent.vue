<template>
  <table class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Author</th>
        <th>Title</th>
        <th>Description</th>
        <th>Published On</th>
        <th>URL Image</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in wsj" :key="item">
        <td>{{ item.author }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.publishedAt }}</td>
        <td><img :src="item.urlToImage" :alt="item.title" width="150" height="100"></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'HomeComp',
  computed: {
    ...mapGetters(["wsj"])
  },
  methods: {
    ...mapActions(["fetchWSJ"])
  },
  created(){
    this.fetchWSJ()
  }

}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
