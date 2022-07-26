<script>
  export default {}
</script>

<template>
  <aside>
    <div class="mid">
      <div class="text_content">
        <h3>遇到平版電腦時會自動轉換成適合平版電腦大小的版型</h3>
        <h6>test</h6>
      </div>
      <a href="javscript:;"></a>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  h6{
    color: red;
    font-size: 18px;
  }
  aside {
    height: 245px;
    background-color: #27212c;
    > .mid {
      width: 1024px;
      height: 100%;
      margin: 0 auto;
      > .text_content {
        width: 77%;
        height: 100%;
        float: left;
      }
      > .text_content > h3 {
        color: #9484a2;
        font-size: 20px;
        font-weight: 400;
        line-height: 245px;
        letter-spacing: 2px;
      }
      > a {
        width: 23%;
        height: 100%;
        float: right;
        background:#bc3183 url("~@/assets/rightbtn.jpg") no-repeat 50% 50%;
      }
    }
  }
  @media screen and (max-width: 1044px) {
  aside > .mid {
    width: 100%;
    > .text_content > h3 {
      font-size: 18px;
      padding-left: 3%;
    }
    > a{width: 20%;}
  }
  }
  @media screen and (max-width: 640px) {
    aside {
      width: 100%;
      height: 75px;
      background-color: #27212c;
      > .mid{
        > .text_content {
          width: 85%;
          > h3 {
            font-size: 0.5em;
            line-height: 75px;
            letter-spacing: 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 90%;
            overflow: hidden;
          }
        }
        > a {width: 15%;}
      }
    }
  }
</style>