<template>
  <div class="note-list">
    <ul>
      <li v-for="item in noteList" :key="item.id" @click="noteDetail(item.id)">
        <div class="img">
          <img :src="item.head_img" alt="">
        </div>
        <p class="time">{{item.c_itme}}</p>
        <div class="title">{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noteList: []
    }
  },
  created() {
    this.initNoteList()
  },
  methods: {
    initNoteList() {
      let noteType = this.$route.query.title
      this.$http({
        method: 'post',
        url: this.$util.baseUrl + 'users/findNoteListByType',
        data: {
          note_type: noteType
        }
      }).then(res => {
        console.log(res);
        if(res.data.code == '80000'){
          this.noteList = res.data.data
        }else{
          this.$toast(res.data.mess)
        }
      })
    },
    noteDetail(id) {
      this.$router.push({path: '/noteDetail',query: {id: id}})
    }
  }
}
</script>

<style lang="less" scoped>
    .note-list{
        box-sizing: border-box;
        width: 100vw;
        padding: 1.066667rem .666667rem 0;
        ul{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            li{
                width: 4rem;
                margin-bottom: .72rem;
                overflow: hidden;
                .img{
                    width: 100%;
                    height: 4rem;
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: .266667rem;
                    }
                }
                .time{
                    display: flex;
                    justify-content: space-between;
                    margin-top:10px; 
                    margin-bottom: 5px;
                    opacity: 0.7;
                    color: rgba(16, 16, 16, 1);
                    font-size: .373333rem;
                    font-family: Arial;
                    .collection{
                        position: relative;
                        top: -2px;
                    }
                }
                .title{
                    height:1.12rem ;
                    line-height: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    color: rgba(16, 16, 16, 1);
                    font-size: .373333rem;
                    font-family: Arial; 
                }
            }
        }
    }
</style>