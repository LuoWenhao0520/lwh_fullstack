<template>
  <div class="count">
    <h3>{{$store.state.count}}</h3>
    <h2>{{count}}</h2>
    <h2>{{newCount}}</h2>
    <p>
      <button class="add" @click="test">add</button>
      <button class="reduce" @click="reduce">reduce</button>
    </p>
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters, mapActions } from 'vuex'
export default {
  // computed: {
  //   newCount () {
  //     return this.$store.state.count * 2;
  //   }
  // }

  data () {
    return {
      msg: ''
    }
  },

  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  methods: {
    test() {
      this.addAction()
      this.add()
    },
    ...mapMutations(['add','reduce']),
    ...mapActions(['addAction'])
  }
}
</script>

<style>

</style>