<template>
  <div class="about">
    <p>当前温度:{{temperture.num}}</p>
    <p>推荐穿衣:{{suggest}}</p>

  <div>
    <button @click="add">+</button>
    <button @click="reduce">-</button>
  </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      temperture: {
        num: 9
      },
      suggest: '羽绒服'
    }
  },
  computed: {
    newCount () {
      return (this.count + 10) ** 2
    }
    // suggest () {
    //   if (this.temperture <= -1) return '羽绒服'
    //   if (this.temperture <= 14) return '棉袄'
    //   if (this.temperture <= 24) return '夹克'
    //   return '短袖'
    // }
  },
  methods: {
    add () {
      this.temperture.num += 5
    },
    reduce () {
      this.temperture.num -= 5
    }
  },
  watch: {
    // temperture (newVal, oldVal) {

    temperture: {
      handler (newVal, oldVal) {
        console.log(newVal.num, oldVal)
        if (newVal.num <= -1) this.suggest = '羽绒服'
        else if (newVal.num <= 14) this.suggest = '棉衣'
        else if (newVal.num <= 24) this.suggest = '夹克'
        else this.suggest = '短袖'
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style>

</style>
