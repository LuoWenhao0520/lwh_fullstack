<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button> -->

  <ul>
    <Fragment :data="[5,3,4,1,8,9,2]"/>
  </ul>
</template>

<script>
// composition api
import { reactive,computed,ref,onMounted } from 'vue'
import Fragment from './components/Fargment.vue'
export default {
  setup() { //入口
    
    const {state,double} = useCounter(1)

    let num = ref(2)

    function add() {
      state.count ++
      num.value += 10
    }

    onMounted(() => {
      console.log('onMounted');
    })


    return {state,add,double,num}
  },

  components: {
    Fragment
  }

  
}

function useCounter(count) {
  const state = reactive({
    count
  })

  const double = computed(() => state.count * 2)

  return {state,double}
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
</style>
