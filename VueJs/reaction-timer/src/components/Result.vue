<template>
  <div class="result">
    <p>Reaction time: {{ score }} ms</p>
    <h2>{{ rank }}</h2>
  </div>
</template>

<script>
export default {
props:['score'],
data() {
    return {
        rank: null
    }
},
mounted() {
    if (this.score < 250) {
        this.rank = 'Holy Sh*t! Ninja Finger!'
    }
    else if (this.score > 250 && this.score < 500) {
        this.rank = 'Hmm...Quite Good Reflexes'
    }
    else {
        this.rank = 'Turtle!'
    }
}
}
</script>

<style>

</style>