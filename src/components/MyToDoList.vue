<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p class="mb-2">Let' s make our first To-Do List</p>

    <router-link to="/listHandler">
      <mdb-btn color="primary">Başla</mdb-btn>
    </router-link>

    <hr />
  </div>
</template>

<script>
import { mdbBtn } from "mdbvue";
export default {
  name: "MyToDoList",
  components: {
    mdbBtn
  },
  props: {
    msg: String
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  font-weight: normal;
  padding-top: 20px;
  padding-bottom: 30px;
}
p {
  color: #969696;
  margin-bottom: 0;
  font-size: 2rem;
}
.hello {
  text-align: center;
}
</style>
