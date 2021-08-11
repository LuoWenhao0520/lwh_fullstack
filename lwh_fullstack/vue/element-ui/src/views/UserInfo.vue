<template>
  <div class="user-info">
      <ul>
          <li v-for="(item,index) in sortedNews" :key="index">{{item.title}}---{{item.date}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num: 2,
            price: 100,
            news: [
                {title: 'lwh', date: '2020/01/02'},
                {title: 'wenhao',date: '2021/01/10'},
                {title: 'luo', date: '2021/02/22'}
            ]
        }
    },
   computed: {
       value() {
           return this.num ** 4
       },
       totalPrice() {
           return this.num * this.price;
       },
       sortedNews() {
           let sortedns = this.news;
           sortedns.reverse()
           return sortedns;
       }
   }
}
</script>

<style>

</style>