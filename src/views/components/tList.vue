<template>
  <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">热门</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="item in hotCities" :key="item.id"> 
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>

        <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
          <div class="alphabet-title border-topbottom">{{key}}</div>
          <div class="button-list">
            <div class="button" @click="chooseCity(ele)" v-for="(ele, key) in item" :key="key">{{ele.name}}</div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import eventBus from '../../model/eventBus.js'
export default {
  name: 'tList',
  props:{
    cities: Object ,
    hotCities: Array,
  },
  data(){
    return{
      letter:''
    }
  },
  mounted(){
    eventBus.$on('change',(letter)=>{
      this.letter = letter;
      const elment = this.$refs[this.letter][0];
      this.scroll.scrollToElement(elment,100);
    });
    this.scroll = new Bscroll(this.$refs.wrapper,{
      click: true
    })
  },
  methods:{
    chooseCity(city){
      this.$emit('getCurrentCity',city)
    }
  }
  // watch: {
  //   letter() {
  //     if(this.letter) {
  //       const elment = this.$refs[this.letter][0]
  //       this.scroll.scrollToElement(elment)
  //     }
  //   }
  // },

}
</script>
<style lang="scss">
  .list{
    height: 100%;
    overflow: auto;
    .area{
      .title,.button-list{
        text-align: left;
      }
      .title{
        background: #ccc;
        margin-top: 10px;
        padding-left: 6px;
        height: 80px;
        line-height: 80px;
      }
      .button-list{
        background: #fff;
        border-bottom: 1px solid #ccc;
        padding: 0px 10px;
        border-radius: 6px;
      }
      .alphabet-title{
        text-align: left;
        padding-left: 20px;
        height: 80px;
        line-height: 80px;
      }
    }
  }
</style>