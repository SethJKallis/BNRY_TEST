<template>
    <div>
        <nav>
            <router-link to="/">Home Table</router-link> |
            <router-link to="/wsj-articles">Wall Street Journal Articles</router-link> |
            <router-link to="/tesla-articles">Tesla Articles</router-link> |
            <router-link to="/us-business-articles">US Business Articles</router-link> |
            <router-link to="/tech-crunch-articles">Tech Crunch Articles</router-link> |
            <router-link to="/apple-articles">Apple Articles</router-link> |
          </nav>     

    </div>
</template>

<script>
export default{
    name: 'NavComp',
}
</script>