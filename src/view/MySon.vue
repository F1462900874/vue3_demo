


<!-- <template>
  <h1>{{ title }}</h1>
  <button @click="changeSelfTitle">修改自身标题</button>
</template> -->

<!-- <script setup>
const props = defineProps({
  title: {
    type: String,
    default: ""
  }
})
const { title } = toRefs(props)
const emits = defineEmits(["update:title", "sonEmitDate"])
// const changeSelfTitle = () => {
//   emits("sonEmitDate", '1231231')
// }
</script> -->


<template>
  <h1>我是子组件</h1>
  <test-mater />
</template>

<script setup>
import { onMounted } from "vue";
// import TestMater from '../components/TestMater.vue';
onMounted(() => {
  console.log(
    "测试环境变量",
    process.env.APP_ENV,
    import.meta.env.VITE_SOME_KEY,
    import.meta.env.VITE_APP_TITLE
  );
});
</script>