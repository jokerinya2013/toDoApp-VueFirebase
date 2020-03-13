<template>
  <div class="home">
    <img alt="MDB logo" src="../assets/logo.png" />
    <MyToDoList msg="Welcome to My To Do List" />
  </div>
</template>

<script>
// @ is an alias to /src
import MyToDoList from '@/components/MyToDoList.vue'

export default {
  name: 'home',
  components: {
    MyToDoList
  }
}
</script>
