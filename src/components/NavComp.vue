<template>
    <div>
        <nav class="navbar bg-dark navbar-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Binary Articles</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link to="/">Home Table</router-link>
                </li>
                  <li class="nav-item">
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
          </nav>  

    </div>
</template>

<script>
export default{
    name: 'NavComp',
}
</script>

<style scoped>
nav{
    z-index: 1;
    position: fixed;
    top: 0;
    width: 100%;
}
</style>