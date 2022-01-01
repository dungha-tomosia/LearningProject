<template>
  <h1>Ninja reaction timer</h1>
  <button @click="startGame" :disabled='isPlaying'>Play</button>
  <Block v-if="isPlaying" :delay='delay' @end="endGame"></Block>
  <Result v-if="showResult" :score='score'></Result>
</template>

<script>
import Block from './components/Block.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Block,
    Result
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResult: false,
    }
  },
  methods: {
    startGame() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResult = false
      console.log(this.delay)
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResult = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
</style>
