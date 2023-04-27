<template>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <button @click="age++">年龄+1</button>
  <button @click="store.$reset()">重置数据</button>
  <button @click="editData">批量修改数据</button>
  <button @click="changeData">替换state</button>
  <p>新年龄：{{ store.getAddAge() }}</p>
  <p>调用其它getter：{{ store.getNameAndAge }}</p>
  <hr>
  <p>调用其它getter带参数：{{ store.getAddAge(10) }}</p>
  <button @click="changeUserName">修改Name</button>
  <hr>
  <button id="counter" @click="increment">{{ count }}</button>
  <hr>
  <!-- <MySon :title="title" @sonEmitDate="editFatherDate" /> -->
  <!-- <button @click="changeTitle">修改子组件标题</button> -->
</template>

<script setup>
const store = userStore()
const { name, age, sex } = storeToRefs(store)
const editData = () => {
  store.$patch((state) => {
    state.age = 100;
    state.name = '张三';
    state.sex = '女'
  })
}
const changeData = () => {
  store.$state = {
    name: "王五",
    age: 18,
    sex: "女",
  }
}
const changeUserName = () => {
  store.saveUserName('李娜')
}

const count = ref(0)
async function increment() {
  count.value++
  console.log(document.getElementById('counter').textContent) // 0
  await nextTick()
  console.log(document.getElementById('counter').textContent) // 1
}

const title = ref("我是子组件")
const changeTitle = () => {
  title.value = "new title"
}
const editFatherDate = (newTitle) => {
  title.value = newTitle
}
</script>

<style scoped></style>