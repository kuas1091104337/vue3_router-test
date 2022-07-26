<script>
import { ref, watch } from '@vue/runtime-core';
// import { ref, watch } from "vue";
import { useRoute } from 'vue-router';
export default {
  setup() {
    const activeNum = ref(0),
          navArr = ['','about','Course'],
          route = useRoute();
          console.log(route);
          console.log(route.path);
    watch(() => route.path, () => {
      // console.log(route.path)
      const path = route.path.substr(1).split('/')[0];
      console.log(path);
      navArr.forEach((item, idx) => {
        if(path === item) activeNum.value = idx;
      });
    })
    // const idx = ref(0),
    //       reuteArr = ['','about','courses'],
    //       route = useRoute();
    // watch(
    //   () => route.path,
    //   () => {
    //     reuteArr.forEach((item, index) => {
    //       const rp = route.path.substr(1).split("/")[0];
    //       if (rp === item) idx.value = index;
    //     });
    //   }
    // );
    return { activeNum };
  },
};
</script>

<template>
  <div id="nav">
    <router-link to="/" :class="{active: activeNum === 0}">Home</router-link>
    |
    <router-link to="/about" :class="{active: activeNum === 1}">About</router-link>
    |
    <router-link to="/Course" :class="{active: activeNum === 2}">Course</router-link>
    <!-- <router-link :class="{ active: idx === 0 }" to="/">Home</router-link>
    |
    <router-link :class="{ active: idx === 1 }" to="/about">About</router-link>
    |
    <router-link :class="{ active: idx === 2 }" to="/courses">Courses</router-link> -->
  </div>
  <router-view></router-view>
  <!-- <router-view/> -->
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
  > a {
    color: #2c3e50;
    font-weight: bold;
  }
  // > .router-link-active{color:#42b983;}
  > .active{color:#42b983;}
}
</style>
