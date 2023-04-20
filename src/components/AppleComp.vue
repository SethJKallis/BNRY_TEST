<template>
    <div>
        <div class="article-container row g-0">
            <div class="article-card col-12 col-sm-6 col-md-4 mb-3 gx-3" v-for="item in apple" :key="item">
                <figure class="d-flex flex-column justify-content-between pb-1">
                    <img :src="item.urlToImage" :alt="item.title" height="250">
                    <figcaption class="article-title">{{item.title}}</figcaption>
                    <div class="article-details">
                        <p class="article-author lead fw-bold fs-6">-{{item.source.name}}</p>
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
    name: "AppleComp",
computed: {
    ...mapGetters(["apple"])
  },
methods: {
    ...mapActions(["fetchApple"])
  },
async created(){
    this.fetchApple()
  }

}
</script>

<style scoped>
figure{
    border: 2px solid #0000005b;
    border-radius: 1em;
    box-shadow: 2px 2px 10px;
    padding:em;
    width: 100%;
    height: 100%;
    transition: all 0.45s ease 0s;
}
figure:hover{
    scale: 1.025;
}
img{
    width: 100%;
    border-top-right-radius: 0.85em;
    border-top-left-radius: 0.85em;
}
.article-title{
    font-size: 1.2em;
    padding: 0 0.5em;
    font-weight: bold;
    color: #000;
}
.article-author{
    color: #0000009a;
}
.published-date{
    font-size: 0.75em;
    color: grey;
}
</style>