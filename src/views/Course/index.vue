<script>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
  setup() {
    const courseArr = reactive({data:[]}),
          router = useRouter(),
          gotoNewRouter = (id) => {
            // <router-link> 中間無法處理其他的計算動作 或 參數的處理
            router.push({path:`/Course/${id}`}) // `/Course/${item.id}`
          },
          openNewTab = (id) => {
            // resolve 可以儲存 vue router 裡面，所使用這個網址的狀態
            const saveUrl = router.resolve({path:`/Course/${id}`})
            window.open(saveUrl.href)
            console.log(saveUrl);
            // window.open(router.resolve({path:`/Course/${id}`}).href)
          };
    onMounted(() => {
      // 取得課程列表
      axios.get('https://vue-lessons-api.herokuapp.com/courses/list')
      .then(function(res){
        // https://vue-lessons-api.herokuapp.com/courses/list // 取得課程列表
        // console.log(res); console.log(res.data); console.log(courseArr.data);
        courseArr.data = res.data;
      }).catch(function(error){
        console.log(error.response.data); // 不是2XX系列進來catch
        console.error(error.response.data.msg);
      });
    })
    return {courseArr, gotoNewRouter, openNewTab};
  },
};
</script>
<template>
  <div id="courses">
    <!-- <router-link
      class="card"
      v-for="(item, idx) in courseArr.data"
      :key="item.id"
      :to="`/Course/${item.id}`"
    > -->
    <a
      class="card"
      v-for="item in courseArr.data"
      :key="item.id"
      @click.left="gotoNewRouter(item.id)"
      @click.right="openNewTab(item.id)"
    ><!--  -->
      <img :src="item.photo" :alt="item.name" />
      <div class="content">
        <h1>{{item.name}}</h1>
        <div class="teacher-box">
          <div class="teach-img">
            <img class="teacher" :src="item.teacher.img" :alt="item.teacher.name" />
            <p>{{item.teacher.name}}</p>
          </div>
          <h2>NTD:{{item.money}}</h2>
        </div>
        <p>購買人數:{{item.student}}</p>
      </div>
    </a><!--  -->
    <!-- </router-link> -->
  </div>
</template>

<style lang="scss" scoped>
#courses {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
a.card {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 318px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.2);
  margin-bottom: 20px;
  opacity: 0.7;
  transition: opacity 0.2s;
  background-color: rgb(231, 231, 231);
  &:hover {
    opacity: 1;
  }
  > img {
    margin-right: 10px;
  }
  .content {
    > h1 {
      font-size: 14px;
      text-align: left;
    }
    .teacher-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5px;
      > h2 {
        font-size: 13px;
      }
      .teach-img {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        > img {
          border-radius: 25px;
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
