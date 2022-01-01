<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template #links>
        <a href="#">Sign up</a>
        <a href="#">More Info</a>
      </template>
      <h1>Ninja Giveaway!!!</h1>
      <p>Grab your ninja swag for half price!</p>
    </Modal>
  </div>
  <div v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <template #links>
        <a href="#">Sign in</a>
        <a href="#">Forgot Password</a>
      </template>
      <h1>If you have an account</h1>
      <p>Please sign in here</p>
    </Modal>
  </div>
  <p>Welcome....</p>
  <button @click.alt="toggleModal">Open Modal (Hold Alt)</button>
  <button @dblclick="toggleModal2">Open Modal2 (Double Click)</button>
</template>
<script>
import Modal from "./components/Modal.vue"

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first Vue App",
      header: "Please sign up for Giveaway",
      text: "Grab your ninja swag for half price",
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
