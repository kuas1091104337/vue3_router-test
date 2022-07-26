<script>
import Head from "@/components/Head.vue";
import Foot from "@/components/Foot.vue";
export default {
  components : { Head,Foot }
}
</script>

<template>
  <Head/>
  <router-view></router-view>
  <Foot/>
</template>

<style lang="scss">
  * {
    font-family: "Microsoft JhengHei", "Heiti TC", "sans-serif";
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  img {display: block;}
  html, body {
    width: 100%;
    height: 100%;
  }
</style>