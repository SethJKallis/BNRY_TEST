<template>
    <div>
        <h1 class="mb-2">All the latest Wall Street news at your fingertips!</h1>
        <form class="d-flex justify-content-center mb-3" role="search">
                  <input class="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
        <div class="article-container row g-0">
            <div class="article-card col-12 col-sm-6 col-md-4 mb-3 gx-3" v-for="item in wsj" :key="item">
                <figure class="d-flex flex-column justify-content-between pb-1">
                    <img :src="item.urlToImage" alt="">
                    <figcaption class="article-title">{{item.title}}</figcaption>
                    <div class="article-details">
                        <p class="article-author lead fw-bold fs-6">-{{item.source.name}}</p>
                        <button class="btn btn-primary"><a :href="item.url" class="text-light text-decoration-none w-100 h-100" target="_blank">See Article</a></button>

                        <figcaption class="published-date">{{item.publishedAt}}</figcaption>
                    </div>
                </figure>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default{
    computed: {
    ...mapGetters(["wsj"])
  },
  methods: {
    ...mapActions(["fetchWSJ"])
  },
  async created(){
    this.fetchWSJ()
  }

}
</script>