<template>
  <div class="page">
    <p>
      <router-link to="/">首页</router-link> | 
      <router-link to="/about">关于</router-link>
    </p>
    <!-- <router-virw></router-virw> -->
    
    <transition name="fade">
      <router-view></router-view>

    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  components: {
    
  }
}
</script>

<style>

.fade-enter{
  opacity: 0;
}

.fade-leave{
  opacity: 1;
}

.fade-enter-active{
  transition: opacity .5s;
}

.fade-leave-active{
  opacity: 0;
  /* transition: opacity .5s; */
}

.page {
  text-align: center;
}

ul li{
  list-style: none;
}
</style>