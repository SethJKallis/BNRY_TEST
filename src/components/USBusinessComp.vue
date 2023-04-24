<template>
    <div class="content-container">
        <div>
            <h1 class="mb-2">All the latest US Business news at your fingertips!</h1>
            <form class="d-flex justify-content-center mb-3" role="search">
                <input class="form-control me-2 w-50" placeholder="Search Title" v-model="searchQuery">
              </form>
            <div class="article-container row g-0">
                <div class="article-card col-12 col-sm-6 col-md-4 mb-3 gx-3" v-for="item in filtered" :key="item.id">
                    <figure class="d-flex flex-column justify-content-between pb-1">
                        <img :src="item.urlToImage" :alt="item.title" height="250">
                        <figcaption class="article-title">{{item.title}}</figcaption>
                        <div class="article-details">
                            <p class="article-author lead fw-bold fs-6">-{{item.author}}</p>
                            <button class="btn btn-primary"><a :href="item.url" class="text-light text-decoration-none w-100 h-100" target="_blank">See Article</a></button>

                            <figcaption class="published-date">{{item.publishedAt}}</figcaption>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default{
    name:"USBusinessComp",
    data(){
        return {
            searchQuery:''
        }
    },
    setup(){
        const store = useStore();
        store.dispatch("fetchUSBusiness");
        const USBusiness = computed(()=>store.state.USBusiness)
        return{
            USBusiness
        }
    },
    computed: {
        filtered:  function(){
        if(this.USBusiness == null){
            return this.USBusiness
        } else {
            return this.USBusiness.filter((item)=>{
                return item.title.toLowerCase().match(this.searchQuery.toLowerCase())
            });
            
        }
    }

    }

}
</script>