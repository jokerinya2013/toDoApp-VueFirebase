<template>
  <mdb-container>
    <h2>User Girişi</h2>
    <mdb-btn rounded color="default" @click.native="login = true"
      >Modal Açıcı <mdb-icon icon="eye" class="ml-1"
    /></mdb-btn>
    <mdb-modal
      class="needs-validation text-left"
      novalidate
      :show="login"
      @close="login = false"
    >
      <mdb-modal-header class="text-center">
        <mdb-modal-title tag="h4" bold class="w-100">Sign in</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body class="mx-3 grey-text">
        <mdb-input
          for="validationCustom01"
          label="Your email"
          icon="envelope"
          type="email"
          class="mb-5"
          v-model="user.email"
        />
        <div class="invalid-feedback">
          Please choose a username.
        </div>
        <mdb-input
          for="validationCustom02"
          label="Your password"
          icon="lock"
          type="password"
          v-model="user.password"
        />
        <div class="invalid-feedback">
          Please choose a username.
        </div>
      </mdb-modal-body>
      <mdb-modal-footer center>
        <mdb-btn @click="typeToScreen">Login</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbIcon,
  mdbBtn,
  mdbModal,
  mdbModalHeader,
  mdbModalTitle,
  mdbModalBody,
  mdbModalFooter,
  mdbInput
} from 'mdbvue'
export default {
  name: 'Deneme',
  components: {
    mdbContainer,
    mdbIcon,
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
    mdbModalFooter,
    mdbInput
  },
  data() {
    return {
      login: false,
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    typeToScreen(event) {
      this.login = false
      console.log(this.user)
      this.$emit('showUserInfo', this.user)
      event.preventDefault()
      event.target.classList.add('was-validated')
    }
  }
}
</script>

<style lang="scss" scoped></style>
