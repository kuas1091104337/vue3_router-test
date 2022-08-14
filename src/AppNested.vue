<template>
  <div class="nav">
    <router-link class="nav_item" to="/">Home</router-link>
    <router-link class="nav_item" to="/about">About</router-link>
  </div>
  <div class="main">
    <router-view />
  </div> 
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html, body {
  width: 100%;
  height: 100%;
}
#app {
  color: #2c3e50;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  display: flex;
}
.nav {
  width: 20%;
  background-color: tomato;
  padding-top: 10%;
  &_item{
    color: #2c3e50;
    font-size: 30px;
    font-weight: bold;
    width: 100%;
    display: block;
    margin-bottom: 20px;
    &.router-link-active { color: #fff; }
  }
}
.main {
  width: 80%;
  background-color: wheat;
  display: flex;
  // justify-content: center;
  // align-items: center;
  &_wrap{margin: auto;}
}
</style>
