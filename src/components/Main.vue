<script>
  export default {}
</script>

<template>
  <main>
    <div class="mid">
      <div class="box1"></div>
      <div class="box2"></div>
      <div class="box3"></div>
    </div>
  </main>
</template>

<style lang="scss">
  main {
    height: 294px;
    background-color: #5b0fa1;
    > .mid {
      width: 1024px;
      height: 100%;
      margin: 0 auto;
      background-color: #5b0fa1;
    }
  }
  .box1,.box2,.box3 {
    width: 33.3333%;
    height: 100%;
    float: left;
  }
  .box2,.box3 {background-size: cover;}
  .box1 {
    cursor: pointer;
    background-image: url("~@/assets/rightbtn2.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .box2 {background-image: url("~@/assets/r1.jpg");}
  .box3 {background-image: url("~@/assets/r2.jpg");}
  @media screen and (max-width: 1044px) {
    main > .mid {width: 100%;}
    .box2, .box3{background-position-x: 50%;}
  }
  @media screen and (max-width: 640px) {
    main {
      width: 100%;
      height: auto;
      background-color: #5b0fa1;
      overflow: hidden;
      > .mid {
        width: 100%;
        height: 294px;
        > div {
          width: 100%;
          height: 277px;
          float: left;
        }
      }
    }
  }
</style>