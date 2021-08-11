<template>
  <div class="wrap">
    AAAAA
    <button @click="sendA">aaa</button>
  </div>
</template>

<script>
import Bus from '@/bus/index.js'
export default {
  data () {
    return {
      item: '我是组件A里的数据'
    }
  },
  methods: {
    sendA () {
      Bus.$emit('sendA',this.item)
    }
  }
}
</script>

<style>

</style>