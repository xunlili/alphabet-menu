<template>
  <div class="dropMenu">
    <tHeader/>
    <tList :cities="cities" 
    :hotCities="hotCities"
    @getCurrentCity="getCurrentCity"
    />
    <tAlphabet :cities="cities"/>
  </div>
</template>
<script>
import tHeader from './components/tHeader'
import tList from './components/tList'
import tAlphabet from './components/tAlphabet'
import cicies from '../assets/cities'
import hotCities from '../assets/hotCities'
export default {
  name: 'dropMeun',
  props:{
    cities: {
      type:Object, // 所有的城市数据
      default:cicies 
    } ,
    hotCities: {// 热门城市
      type: Array,
      default:hotCities,
    },
  },
  data(){
    return{
      currentCity: '', // 所选中的城市
    }
  },
  components:{
    tHeader,
    tList,
    tAlphabet
  },
  methods:{
    getCurrentCity(city){
      this.$emit('choosedCity',city)
      this.currentCity = city;
    }
  }
  
}
</script>
<style scoped>
  .dropMenu{
    background: #ccc;
    overflow-y: scroll;
    height: 100vh;
  }
</style>
