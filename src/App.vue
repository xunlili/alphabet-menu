<template>
  <div id="app">
    <div id="nav">
      <!-- <router-view/> -->
      <dropMenu 
        :cities="cities" 
        :hotCities="hotCities"
        @choosedCity="choosedCity"
      />
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      cities:{
        A:[
          {
            id: "Anqing",
            name: "安庆",
          },
          {
            id: "Ali",
            name: "阿里",
          },
          {
            id: "Acheng",
            name: "阿城",
          },
          {
            id: "Anfu",
            name: "安福",
          },
          {
            id: "Anji",
            name: "安吉",
          },
        ],
        B:[
            {
              id: "beijing",
              name: "北京",
            },
            {
              id: "Baicheng",
              name: "白城",
            },
            {
              id: "Baise",
              name: "百色",
            },
            {
              id: "Baishan",
              name: "白山",
            },
            {
              id: "Baiyin",
              name: "白银",
            },
            {
              id: "Bangbu",
              name: "蚌埠",
            },
            {
              id: "Baoding",
              name: "保定",
            },
            {
              id: "Baoji",
              name: "宝鸡",
            },
            {
              id: "Baoshan",
              name: "保山",
            },
            {
              id: "Baotou",
              name: "包头",
            },
            {
              id: "Bazhong",
              name: "巴中",
            },
          ],
        C:[
          {
            id: "Congyang",
            name: "枞阳",
          },
          {
            id: "Conghua",
            name: "从化",
          },
          {
            id: "Cixi",
            name: "慈溪",
          },
          {
            id: "Chunan",
            name: "淳安",
          },
          {
            id: "Chongzhou",
            name: "崇州",
          },
          {
            id: "Chongren",
            name: "崇仁",
          },
          {
            id: "Chiping",
            name: "茌平",
          },{
            id: "Chengwu",
            name: "成武",
          },
          {
            id: "Chengkou",
            name: "城口",
          },
        ],
      },
      hotCities: [
        {
          id: "beijing",
          name: "北京",
        },
        {
          id: "shanghai",
          name: "上海",
        },
        {
          id: "shenzheng",
          name: "深圳",
        },
      ]
    }
  },
  methods:{
    choosedCity(city){
      console.log('city',city)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
