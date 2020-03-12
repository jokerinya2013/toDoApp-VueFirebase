<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <p class="mb-2">
      The application is configured and ready to import our components. You will
      find MDB Vue docs
      <a
        href="https://mdbootstrap.com/docs/vue/?utm_source=DemoApp&utm_medium=MDBVue"
        target="_blank"
        >here</a
      >.
    </p>
    <p>
      Please type <span class="black-text">npm run demo</span> or
      <span class="black-text">yarn demo</span> to launch our Demonstration
      Page. The files with the code are placed in the
      <span class="black-text">demo</span> directory.
    </p>
    <p>
      If You want to completely remove our demo from Your App, easily type
      <span class="black-text">npm run remove-demo</span> or
      <span class="black-text">yarn remove-demo</span>.
    </p>
    <br />
    <br />
    <hr />
    <mdb-row class="text-center" style="margin:0 25%;">
      <mdb-col class="text-center">
        <h3>Bunu ben koydum</h3>
        <Deneme @showUserInfo="showUserInfo($event)" />
        <div v-show="show">
          <mdb-card class="text-center">
            <mdb-card-header tag="h5">Bu bilgileri girdin..</mdb-card-header>
            <mdb-card-body>
              <mdb-card-title>Special title treatment</mdb-card-title>
              <mdb-card-text>User email: {{ gelenInfo.email }} </mdb-card-text>
              <mdb-card-text>Password: {{ gelenInfo.password }} </mdb-card-text>
              <!-- <mdb-card-text small muted
                >Last updated <br />
                {{ second >= 60 ? 0 : second }}
                {{ second === 1 ? 'second' : 'seconds' }} <br />
                {{ second === 60 ? minute++ : minute }}
                {{ minute === 1 ? 'minute' : 'minutes' }} <br />
                {{ minute === 60 ? hour++ : hour }}
                {{ hour === 1 ? 'hour' : 'hours' }} <br />
                ago
              </mdb-card-text> -->
              <mdb-card-text small muted>
                Last updated <br />
                {{ second }} {{ second === 1 ? 'second' : 'seconds' }}<br />
                {{ minute }} {{ minute === 1 ? 'minute' : 'minutes' }} <br />
                {{ hour }} {{ hour === 1 ? 'hour' : 'hours' }}<br />
                {{ day }} {{ day === 1 ? 'day' : 'hours' }} <br />
                ago.
              </mdb-card-text>
            </mdb-card-body>
          </mdb-card>
        </div>
      </mdb-col>
    </mdb-row>
  </div>
</template>

<script>
// denemeyi ben koydum
import Deneme from './Deneme.vue'
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardTitle,
  mdbCardText,
  mdbCardBody,
  mdbCardHeader
} from 'mdbvue'

export default {
  name: 'HelloWorld',
  components: {
    Deneme,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardTitle,
    mdbCardText,
    mdbCardBody,
    mdbCardHeader
  },
  props: {
    msg: String
  },
  data() {
    return {
      show: false,
      gelenInfo: {},
      second: 0,
      minute: 0,
      hour: 0,
      day: 0
    }
  },
  methods: {
    showUserInfo(gelen) {
      this.show = true
      this.gelenInfo = gelen
      let zaman = setInterval(this.counter, 1000)
      setTimeout(() => clearInterval(zaman), 10000000)
    },
    counter() {
      this.second++
      if (this.second === 60) {
        this.second = 0
        this.minute++
        if (this.minute === 60) {
          this.minute = 0
          this.hour++
        }
        if (this.hour === 24) {
          this.hour = 0
          this.day++
        }
      }
    }
  }
}
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
  font-size: 14px;
}
.hello {
  text-align: center;
}
</style>
