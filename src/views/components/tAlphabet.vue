<template>
  <div class="tAlphabet">
    <ul>
      <li class="item" 
          v-for="(item,key) in letters" 
          :key="key"
          @click="handleLetterClick"
          >{{item}}</li>
    </ul>
  </div>
</template>
<script>
import eventBus from '../../model/eventBus.js'
export default {
  name: 'tAlphabet',
  props: {
    cities: Object,
  },
  data(){
    return {
      letter: '',
    }
  },
  computed:{
    letters() {
      var letters = []
      for(let key in this.cities) {
        letters.push(key)
      }
      return letters
    },
  },
  methods:{
    handleLetterClick(e){
      this.letter = e.target.innerText
      eventBus.$emit('change',e.target.innerText);
    }
  }
}
</script>
<style lang="scss">
.tAlphabet{
  position: absolute;
  top: 80px;
  right: 30px;
  .item{
    list-style-type:none;
    width: 40px;
  }
}
  
  
    
</style>