# alphabet-menu

### 安装
```
 npm install --save alphabet-menu
```

### 在main.js中引入样式
```
import 'alphabet-menu/dist/alphabet-menu.css'
```

### 在main.js中引入全局组件和注册组件
###### 也可以在组件中局部引入组件，这里就不详细介绍了
```
 import { dropMenu } from 'alphabet-menu'
 
 Vue.use(dropMenu)
```

###使用
```
<dropMenu 
        :cities="cities" 
        :hotCities="hotCities"
        @choosedCity="choosedCity"
      />
```
### 说明
```
cities  // Object 所有的城市数据
hotCities  // Array  热门城市
choosedCity  // Function（item: Object） 选中后的回调

eg:
cities: {
	A:[
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
        id: "Bangbu",
        name: "蚌埠",
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
	……
}

hotCities:[
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
    {
      id: "guangzhou",
      name: "广州",
    },
  ]
  
  methods:{
	choosedCity(city){
	// 获取选中的城市
		console.log(city)
	}
}
```

### github
https://github.com/xunlili/alphabet-menu

