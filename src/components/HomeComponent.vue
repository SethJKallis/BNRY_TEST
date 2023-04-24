<template>
  <div class="home-container pt-2">
    <div class="heading">
      <h1 class="text-dark fw-bold display-5">Welcome to Binary Articles, all the latest news in one central site!</h1>
    </div>
    <div class="category-container">
      <h2 class="text-light">Check out these Categories:</h2>
      <ul>
        <li>
          <router-link to="/wsj-articles">Wall Street Journal Articles</router-link>
        </li>
        <li>
          <router-link to="/tesla-articles">Tesla Articles</router-link>
        </li>
        <li>
          <router-link to="/us-business-articles">US Business Articles</router-link>
        </li>
        <li>
          <router-link to="/tech-crunch-articles">Tech Crunch Articles</router-link>
        </li>
        <li>
          <router-link to="/apple-articles">Apple Articles</router-link>
      </li>
      </ul>
    </div>
  </div>
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
ul{
  list-style-type: none;
}
ul li {
  margin: 1em 0;
}
ul li a{
  text-decoration: none;
  color: #ffffff;
  transition: all 0.25s ease 0s;
}
ul li a:hover{
  letter-spacing: 1px;
  color: #42b983;

}

.category-container{
  background-color: #000000a8;
  margin: 0 4rem 10rem 4rem;
  padding: 1em;
}
</style>