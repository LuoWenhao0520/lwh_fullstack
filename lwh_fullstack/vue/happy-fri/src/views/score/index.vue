<template>
  <div class="score">
    <div class="your_scores_container">
      <header class="your_scores">
        <span class="score_num">{{score}}</span>
        <span class="fenshu">分！</span>
      </header>
      <div class="result_tip">{{resultTip}}</div>
    </div>

    <div class="share_button"></div>
  </div>
</template>

<script>
import { mapState,mapMutations,mapActions } from 'vuex'

export default {
  data() {
    return {
      score: 100,
      rightAnswer: [],
    }
  },
  computed: {
    ...mapState(['answerId','itemDetail']),
    average() {
      return 100 / this.itemDetail.length
    },
    resultTip() {

      if(this.score >= 90)
        return '不错'
      else if(this.score >= 80)
        return '很可以了'
      else if(this.score >= 60)
        return '再加把劲'
      else
        return '没认真做吧'
    }
  },
  created () {
    this.computedScore();
  },

  methods: {
    computedScore() {
      this.score = 0;
      this.answerId.forEach((item) => {
        if(item){
          this.score += this.average
        }
      })
    }
  }
};
</script>

<style lang="less">
body {
  background-image: url(../../images/4-1.jpg);
  padding-top: 1.2rem;
}
.your_scores_container {
  width: 9.7rem;
  height: 9.1rem;
  background: url(../../images/4-2.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .your_scores {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fenshu {
      color: #a51d31;
    }
  }
  .result_tip {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}
.share_button {
  width: 6.025rem;
  height: 2.4rem;
  margin: 0.8rem auto 0;
  background: url(../../images/4-3.png) no-repeat 0.4rem 0;
  background-size: 5.825rem 100%;
}
.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;
  .share_header {
    color: #664718;
    font-size: 0.475rem;
    font-family: "Microsoft YaHei";
    width: 7rem;
    font-weight: 500;
  }
  .code_img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}
.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url(../../images/5-1.png) no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>