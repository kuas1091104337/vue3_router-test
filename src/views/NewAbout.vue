<template>
  <div class="main_wrap">
    <nav class="aboutNav">
      <router-link class="aboutNav_item" to="/about/">About</router-link>
      <router-link class="aboutNav_item" to="/about/guide">Guide</router-link>
      <router-link class="aboutNav_item" to="/about/changelog">Changelog</router-link>
      <router-link class="aboutNav_item" to="/about/gitHub">GitHub</router-link>
      <router-link class="aboutNav_item" to="/about/reference">Reference</router-link>
    </nav>
    <main class="aboutMain">
      <router-view/>
    </main>
  </div>
</template>
<style lang="scss">
.about{
  &Nav{
    display: flex;
    justify-content:center;
    &_item{
      color: #2c3e50;
      font-weight: bold;
      margin: 0 10px;
      &.router-link-exact-active {
        color: rebeccapurple;
      }
    }
  }
  &Main{
    &_title {
      font-size: 40px;
      margin-top: 30px;
    }
    &_text {
      color: cadetblue;
      font-size: 20px;
      margin-top: 10px;
    }
  }
}
</style>
