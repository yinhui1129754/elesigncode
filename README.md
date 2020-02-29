# 项目说明 elesigncode
一个支持pc 移动端 平板端使用的电子签名的js
支持webpack开发模式和传统开发模式
# 源码说明
## build 文件夹
放打包的js文件

## example 文件夹
放例子的文件夹

## src 文件夹
类的核心代码文件夹

### class 
我们这个类所需要的的所有类

#### base.js 基类
#### data.js 数据管理类
#### draw.js 绘制类
#### event.js 事件类
#### line.js 线条类
#### point.js 点类

### core 
我们这个类的中心脚本

### scss
样式文件夹目前没有写样式

### untils
各种方法和工具

#### config.js 默认配置项
#### struct.js 没有使用到，结构字典表
#### untils.js 工具方法类

# webpack开发环境使用该插件
## 安装包
```
    npm i elesigncode --save-dev
```
## js代码
```javascript
    import EleSign from "elesigncode"
    var ele = document.getElement("xxx");
    var eleSign = new EleSign();//实例化对象
    eleSign.init(); //初始化
    eleSign.moutedEle(ele) //将签名节点放入到传入的element节点中
```
# 传统浏览器开发模式
## 先引入我们release\lib\dzjm.min.js到html页面中 

## 然后js代码 
```javascript
    var ele = document.getElement("xxx"); 
    var eleSign = new EleSign();//实例化对象
    eleSign.init(); //初始化
    eleSign.moutedEle(ele) //将签名节点放入到传入的element节点中
```
# jq开发模式
## 首先在html中引入jq的脚本
## 接着引入我们release\lib\dzjm.min.js到html页面中
## 然后js代码 
```javascript
    $.fn.EleSign = function(option){
        this.each(function(){
            var eleSign = new EleSign(option);//实例化对象
            eleSign.init(); //初始化
            eleSign.moutedEle(this); //将签名节点放入到传入的element节点中
            //给节点扩展方法好获取电子签名实例对象
            this.getEleSign = function(){
                return eleSign;
            }
        });
        return this;
    }
    //这样我们就可以使用jq的方法来实例化我们的对象了
    $("#xxx").EleSign({
        color:"#ccc"
    });
```

# 实例对象的时候可传入的参数
|属性名称|描述|
|:-|-:|
|ele|要挂载的节点|
|color|签名的颜色|
|lineWidth|签名的线宽|
|bgColor|签名的背景颜色|
# EleSign对象主要方法说明 
|方法名称|描述|参数|返回值|
|:-|-:|-:|-:|
|init|初始化方法|无|无|
|moutedEle|挂载到节点下|ele:传入的节点|无|
|resize|重置签名canvas节点大小到挂载节点的大小，一般可以和resize混合使用|无|无|
|resizeWithNumber|重置签名canvas节点大小到传入的宽度和高度|w:宽度,h:高度|无|
|destory|销毁对象:实例的对象的所有属性没有了事件取消绑定,canvas节点从挂载节点移出|无|无|
|drawEle|强制重新绘制数据|无|无|
|undo|撤销方法|无|无|
|redo|重做方法|无|无|
|toJson|将当前实例签名的数据转化为json|无|无|
|jsonTo|将传入的json数据转化到当前对象|json|无|
|toPng|获取当前签名的base64位数据png类型|无|无|
|toJpeg|获取当前签名的base64位数据jpeg类型|无|无|
|setColor|设置签名的颜色|color:颜色字符串rgb hex均可以|无|
|setLineWidth|设置线宽|lineWidth:线宽|无|
|setBgColor|设置背景颜色|bgColor:颜色字符串rgb hex均可以|无|

# [项目开源地址](https://github.com/yinhui1129754/dzqm)
开源地址：https://github.com/yinhui1129754/dzqm
# 运行项目 
```
 cnpm i
 npm run dev
```

