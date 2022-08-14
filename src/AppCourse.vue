<script>
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
  setup() {
    const activeNum = ref(0),
          // activeNum = ref(0),
          routerArr = ['','about','Course'],
          route = useRoute();//,
          // computedNum = computed(() => {
          //   const path = route.path.substr(1).split('/')[0];
          //   const nowIdx = routerArr.forEach((el, idx) => {
          //     if(path === el) return idx;
          //   });
          //   console.log(nowIdx);
          //   return nowIdx;
          // });
          
          // console.log(route);
          // console.log(route.path);
          // console.log(computedNum.value);
    watch(() => route.path, () => {
      const path = route.path.substr(1).split('/')[0];
      console.log(path);
      routerArr.forEach((item, idx) => {
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
    return {
      activeNum//, computedNum 
    };
  },
};
</script>

<template>
  <div id="nav">
    <router-link to="/" :class="['nav_item',{active: activeNum === 0}]">Home</router-link>
    |
    <router-link to="/about" :class="['nav_item',{active: activeNum === 1}]">About</router-link>
    |
    <router-link to="/Course" :class="['nav_item',{active: activeNum === 2}]">Course</router-link>
    <!-- <router-link to="/" :class="['nav_item',{active: activeNum === 0},{now: computedNum === 0}]">Home</router-link>
    |
    <router-link to="/about" :class="['nav_item',{active: activeNum === 1},{now: computedNum === 1}]">About</router-link>
    |
    <router-link to="/Course" :class="['nav_item',{active: activeNum === 2},{now: computedNum === 2}]">Course</router-link> -->
    <!-- <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/Course">Courses</router-link> -->
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
  > .active, > .router-link-active{color:#42b983;}
}
</style>
