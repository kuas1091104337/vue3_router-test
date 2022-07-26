<script>
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
export default {
  setup() {
    let timer = null;
    const dataArr = reactive({data:[]}),
          isError = ref(false),
          route = useRoute(),
          router = useRouter();
    onMounted(() => {
      console.log(route); //console.log(route.params.id);
      axios.get(`https://vue-lessons-api.herokuapp.com/courses/${route.params.id}`)
      .then(function(res){
        // https://vue-lessons-api.herokuapp.com/courses/{id} // 取得單一課程內容
        // console.log(res.data); console.log(res.data.data);
        // console.log(res.data.data[0]); console.log(res.data.data[0].teacher.name);
        dataArr.data = res.data.data[0];
      }).catch(function(error){
        console.log(error.response.data.error_message); // 不是2XX系列進來catch
        isError.value = true;
        dataArr.data.error_message = error.response.data.error_message;
        // setTimeout(() => router.push('/Course'),3000);
        // setTimeout(() => router.go(-1), 3000); // 回上一頁
        timer = setTimeout(() => router.push({path:'/Course'}),3000);
      });
    });
    onUnmounted(() => clearTimeout(timer));
    return {dataArr, isError};
  },
};
</script>
<template>
  <div>
    <div v-if="!isError">
      <!-- const obj = {}; -->
      <!-- obj.teacher // undefined   這個時候不會噴錯，只會回傳 undefined -->
      <!-- 但如果 obj.teacher.img -->
      <!-- 直接報錯，因為無法再回傳 undefined 的物件之下找到 img 這個屬性 -->
      <h1>{{dataArr.data.name}}</h1>
      <h2>NTD:{{dataArr.data.money}}</h2>
      <img :src="dataArr.data.photo" :alt="dataArr.data.name" />
      <div v-if="Object.keys(dataArr.data).length !== 0">
        <img :src="dataArr.data.teacher.img" alt="" />
        <p>{{dataArr.data.teacher.name}}</p>
      </div>
    </div>
    <!-- error_message -->
    <h1 v-if="isError">{{dataArr.data.error_message}}</h1>
  </div>
</template>

<style></style>
