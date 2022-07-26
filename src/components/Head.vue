<script>
import { ref } from 'vue';
export default {
  setup(){
    const isOpen = ref(false),
          handMenuOpen = () => isOpen.value = !isOpen.value;
    return {isOpen,handMenuOpen};
  }
}
</script>

<template>
  <header :class="{openMenu:isOpen}">
    <nav>
      <h1>Mike</h1>
      <a id="moblie_menu" href="javascript:;" @click="handMenuOpen"></a>
      <div>
        <router-link class="nav_item" to="/">Home</router-link>
        <router-link class="nav_item" to="/rwd">RWD</router-link>
        <router-link class="nav_item" to="/vuejs">VUEJS</router-link>
        <router-link class="nav_item" to="/reactjs">REACTJS</router-link>
        <router-link class="nav_item" to="/html5">HTML5</router-link>
        <router-link class="nav_item" to="/nodejs">NODEJS</router-link>
        <!-- <a href="javascript:;"></a> -->
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
  header {
    height: 97px;
    background-color: #373c3f;
    > nav {
      width: 1024px;
      height: 100%;
      margin: 0 auto;
      position: relative;
      > h1 {
        color: #fff;
        font-size: 18px;
        line-height: 97px;
        float: left;
        margin-right: 20px;
      }
      > div {
        width: 100%;
        height: 100%;
        > a {
          color: #fff;
          font-size: 15px;
          line-height: 97px;
          float: left;
          padding: 0 10px;
        }
      }
    }
  }
  a#moblie_menu {display: none;}
  @media screen and (max-width: 1044px) {
    header {
      > nav {
        width: 100%;
        > h1 {margin-left: 5%;}
      }
    }
  }
  @media screen and (max-width: 640px) {
    header {
      height: 37px;
      overflow: hidden;
      transition: height 0.2s;
      // &.openMenu {height: 232px;}
      > nav {
        height: 232px;
        > h1 {line-height: 37px;}
        > div {
          // width: 100%;
          height: 195px;
          clear: both;
          > a {
            line-height: 37px;
            text-align: center;
            width: 100%;
            height: auto;
            overflow: hidden;
          }
        }
      }
    }
    .openMenu {height: 232px;}
    a#moblie_menu {
      width: 37px;
      height: 37px;
      display: block;
      background:url("~@/assets/menu.jpg") no-repeat 50% 50%/95% auto;
      position: absolute;
      top: 0;
      right: 0;
    }
  }
</style>