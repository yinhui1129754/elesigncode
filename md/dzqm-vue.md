# 在vue-cli中使用该插件

## 我们先安装组件

```
npm i elesigncode
```

## 首先下载版本大于1.0.9的版本

下载好版本过后我们来创建一个组件

## 在组件中使用的详细流程

```vue
<template>
  <div>
      <div>
        在vue-cli中使用elesigncode
      </div>
      <div class="hello" >
        <ElesignCode ref="signCode1" :datas="datas" :pen="pen"/>  
      </div>
      <div>
        <button @click="changePen">切换笔</button>
        <button @click="getData">获取数据</button>
        <button @click="log($refs.signCode1.toPng())">获取png图片</button>
        <button @click="log($refs.signCode1.toJpeg())">获取jpeg图片</button>
      </div>
  </div>
 
</template>

<script>
var data = {"data":[{"points":[{"x":118,"y":74}],"color":"#333333","lineWidth":4},{"points":[{"x":157,"y":134},{"x":158,"y":134},{"x":162,"y":134},{"x":169,"y":134},{"x":179,"y":134},{"x":193,"y":134},{"x":206,"y":134},{"x":220,"y":134},{"x":237,"y":134},{"x":251,"y":133},{"x":265,"y":132},{"x":277,"y":132},{"x":287,"y":132},{"x":297,"y":131},{"x":300,"y":131}],"color":"#333333","lineWidth":4},{"points":[{"x":147,"y":182},{"x":154,"y":182},{"x":172,"y":182},{"x":187,"y":182},{"x":203,"y":182},{"x":220,"y":182},{"x":241,"y":182},{"x":258,"y":182},{"x":274,"y":182},{"x":288,"y":182},{"x":298,"y":181},{"x":305,"y":180},{"x":308,"y":179},{"x":310,"y":179},{"x":310,"y":178}],"color":"#333333","lineWidth":4},{"points":[{"x":186,"y":205},{"x":184,"y":206},{"x":183,"y":208},{"x":182,"y":210},{"x":181,"y":212},{"x":180,"y":213},{"x":179,"y":215},{"x":177,"y":217},{"x":175,"y":220},{"x":172,"y":224},{"x":167,"y":228},{"x":162,"y":232},{"x":155,"y":238},{"x":146,"y":242},{"x":137,"y":247}],"color":"#333333","lineWidth":4},{"points":[{"x":240,"y":190},{"x":243,"y":194},{"x":245,"y":198},{"x":249,"y":203},{"x":254,"y":207},{"x":260,"y":213},{"x":266,"y":217},{"x":272,"y":221},{"x":281,"y":226},{"x":289,"y":230},{"x":298,"y":234},{"x":307,"y":238},{"x":317,"y":241},{"x":327,"y":244},{"x":336,"y":247},{"x":345,"y":250},{"x":353,"y":253}],"color":"#333333","lineWidth":4}],"color":"#333","lineWidth":4,"bgColor":"-1","pen":"default","writingMaxLine":20,"writingMinLine":10}
// 导入我们内置的vue组件
import ElesignCode from  "elesigncode/lib/core/elesigncode.vue"
export default {
  name: 'HelloWorld',
  // 注册我们的组件
  components:{
    ElesignCode
  },
  data () {
    return {
      pen:"writing",
      datas:data
    }
  },
  methods:{
    changePen(){
      if(this.pen !== "writing"){
        this.pen = "writing"
      }else{
        this.pen = "default"
      }
    },
    log(msg){
      return console.log(msg)
    },
    getData(){
      console.log(this.$refs.signCode1.getJson())
      return this.$refs.signCode1.getJson()
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 95%;
  margin-left:2.5%;
  margin-right:2.5%;
  margin-top:10px;
  margin-bottom:10px;
  height: 300px;
  border:1px solid #e6eaee;
}
</style>
```

## vue组件中内置的属性
|属性名称|描述|默认值|
|:-|-:|-:|
|color|签名的颜色|'#333333'|
|lineWidth|签名的线宽|4|
|bgColor|签名的背景颜色|-1|
|pen|签名的笔类型可选择的值：'default' 'writing'|'default'|
|writingMaxLine|当笔是writing的时候我们来设置最大线宽|20|
|writingMinLine|当笔是writing的时候我们来设置最小线宽|10|
|datas|jsonTo需要的数据|null|

## vue组件中内置的方法
|方法名称|方法说明|参数说明|返回说明|
|:-|-:|-:|-:|
|resize(void)|根据被挂载的目标节点的大小修改签名区域的大小|无|无|
|resizeWithNumber(w,h)|根据传入的大小进行修改签名的大小|w:签名的宽度(px),h:签名的高度(px)|无|
|undo(void)|撤销方法|无|无|
|redo(void)|重做方法|无|无|
|toJson(void)|将对象转换为json对象|无|无|
|getJson(void)|toJson的别名|无|无|
|jsonTo(json)|将json数据转化为当前的数据对象|json:要转化的数据|无|
|toPng(void)|导出base64位的png图片数据|无|无|
|toJpeg(void)|导出base64位的jpeg图片数据|无|无|
|setPen(name)|设置当前的笔类型|name:要设置的笔的名称|无|