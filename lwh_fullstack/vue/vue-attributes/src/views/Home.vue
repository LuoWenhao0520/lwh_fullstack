<template>
  <div class="home">
    <p>num: {{num}}</p>
    <p>
      <button @click="add">add</button>
    </p>
  </div>
</template>

<script>
import { addLog, app } from './Home.js'
export default {
  data () {
    return {
      num: 1
    }
  },
  created () {
    console.log('原生created')
  },
  mixins: [addLog], // 混入
  extends: app, // 扩展
  methods: {
    add () {
      this.num++
    }
  }
}
</script>

<style>

</style>
