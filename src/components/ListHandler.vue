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
    <mdb-row>
      <mdb-col>
        <form action class="form-inline">
          <mdb-input type="text" label="Your Plan.." size="md"></mdb-input>

          <mdb-btn-toolbar>
            <mdb-btn-group>
              <mdb-btn color="success" icon="star" size="sm" />
              <mdb-btn color="warning" icon="magic" size="sm" />
            </mdb-btn-group>
          </mdb-btn-toolbar>
        </form>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
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
      selected: null
    };
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
  background: url("https://www.macobserver.com/wp-content/uploads/2016/07/Galaxy-NGC-3190b.jpg")
    center/cover no-repeat;
  height: 100vh;
  margin-top: -150px;
  .form-inline {
    justify-content: center;
  }
}
</style>