<script>
  export default {}
</script>

<template>
  <article>
    <div>
      <h3>Responsive Web Design</h3>
      <p>選用對的html5標籤除了在閱讀 html 原始碼更加順暢外，也有助於google搜尋引擎排名順序，SEO效果的提升</p>
      <h6>test</h6>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  h6{
    color: green;
    font-size: 24px;
  }
  article {
    height: 578px;
    /* background-image: url("../assets/images/banner.png"); */
    /* ~：在css裡面、@：直接從src裡面開始查找內容、/ */
    background-image: url("~@/assets/banner.png");
    background-size: cover;
    display: flex;
    > div{
      margin:auto;
      > h3 {
        color: #fff;
        font-size: 48px;
        text-align: center;
      }
      > p {
        color: #fff;
        font-size: 14px;
        line-height: 3;
        text-align: center;
      }
    }
  }
  @media screen and (max-width: 1044px) {
    article > div {
      width: 90%;
      > h3 {font-size: 30px;}
      > p {
        font-size: 14px;
        line-height: 25px;
      }
    }
  }
  @media screen and (max-width: 730px) {
    article {height: 349px;}
  }
  @media screen and (max-width: 640px) {
    article {height: 175px;}
  }
</style>