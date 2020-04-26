<template>
  <div class="bg">
    <mdb-row>
      <mdb-col>
        <h1>
          This is
          <span>Great</span>Todo List!!!
        </h1>
      </mdb-col>
    </mdb-row>
    <!-- adding / editing /saving -->
    <mdb-row>
      <mdb-col>
        <form action class="form-inline">
          <mdb-input
            type="text"
            placeholder="Your To Do.."
            size="md"
            v-model="newItem"
            v-on:keyup.enter="addItem"
          ></mdb-input>
          <mdb-btn-toolbar>
            <mdb-btn-group>
              <mdb-btn color="primary" icon="plus-circle" size="sm" @click="addItem">add</mdb-btn>
              <mdb-btn color="warning" icon="magic" size="sm" @click="editReflectedItem">edit</mdb-btn>
            </mdb-btn-group>
          </mdb-btn-toolbar>
          <mdb-btn icon="save" iconColor="white" @click="sendToFirebase">Save</mdb-btn>
        </form>
      </mdb-col>
    </mdb-row>
    <!-- list -->
    <mdb-row class="list__items" v-for="(info, index) in infos" :key="index">
      <mdb-col xs="6">
        <ul class="list__main">
          <li :class="{ done: info.done }">{{ info.duty }}</li>
        </ul>
      </mdb-col>
      <mdb-col xs="6">
        <mdb-btn-toolbar class="justify-content-center">
          <mdb-btn-group>
            <mdb-btn
              v-show="!info.done"
              color="success"
              icon="check"
              size="sm"
              @click="doneList('do', index)"
            ></mdb-btn>
            <mdb-btn
              v-show="info.done"
              darkWaves
              outline="success"
              icon="redo-alt"
              size="sm"
              @click="doneList('rearrange', index)"
            ></mdb-btn>
            <mdb-btn color="warning" icon="edit" size="sm" @click="editList(index)"></mdb-btn>
            <mdb-btn color="danger" icon="trash-alt" size="sm" @click="deleteList(index)"></mdb-btn>
          </mdb-btn-group>
        </mdb-btn-toolbar>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
import axios from "axios";
import {
  mdbCol,
  mdbRow,
  mdbInput,
  mdbBtnGroup,
  mdbBtnToolbar,
  mdbBtn
} from "mdbvue";
export default {
  components: {
    mdbCol,
    mdbRow,
    mdbInput,
    mdbBtn,
    mdbBtnGroup,
    mdbBtnToolbar
  },
  data() {
    return {
      newItem: "",
      infos: [],
      reflected: 0
    };
  },
  created() {
    axios
      .get("https://todolist-245ae.firebaseio.com/lists.json")
      .then(response => {
        // JSON responses are automatically parsed.
        const data = response.data;
        const loadedList = [];
        for (const item in data) {
          const element = data[item];
          loadedList.push(element);
        }
        this.infos = loadedList[loadedList.length - 1];
        this.infos = this.infos[0].empty === true ? [] : this.infos;
      })
      .catch(e => {
        console.log(e);
      });
  },

  methods: {
    deleteList(i) {
      this.infos.splice(i, 1);
    },
    doneList(text, i) {
      this.infos[i].done = text === "do" ? true : false;
    },
    addItem() {
      if (!this.newItem) {
        return;
      }
      console.log(this.newItem);
      this.infos.push({ duty: this.newItem, done: false, empty: false });
      this.newItem = "";
    },
    editList(i) {
      this.newItem = this.infos[i].duty;
      this.reflected = i;
    },
    editReflectedItem() {
      if (this.newItem == false) {
        return;
      }
      this.infos[this.reflected].duty = this.newItem;
      this.newItem = "";
    },
    sendToFirebase() {
      if (!this.infos.length) {
        this.infos.push({ empty: true });
      }
      axios
        .post("https://todolist-245ae.firebaseio.com/lists.json", this.infos)
        .then(res => console.log(res))
        .catch(err => console.log(err));
      this.infos = this.infos[0].empty === true ? [] : this.infos;
    }
  }
};
</script>

<style lang="scss">
.bg {
  color: white;
  h1 {
    padding-top: 10rem;
    span {
      font-weight: bold;
    }
  }
  height: 100%;
  .form-inline {
    justify-content: center;
    color: wheat;
    background: white;
    opacity: 0.8;
  }
  .list__items {
    width: 80%;
    margin: 0 auto;
    border-bottom: 1px solid gainsboro;
  }
  .list__main {
    margin-bottom: 0;
    li {
      font-size: 1.5rem;
    }
  }
  .done {
    text-decoration: line-through;
  }
  .input__area {
    color: wheat;
  }
}
</style>
