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
#### image.js 管理图片加载的类
#### event.js 事件类
#### line.js 线条类
#### point.js 点类


## 各个类的详细说明
[data 数据类](https://github.com/yinhui1129754/dzqm/blob/master/md/data.md)  
[draw 绘制类](https://github.com/yinhui1129754/dzqm/blob/master/md/draw.md)  
[event 事件类](https://github.com/yinhui1129754/dzqm/blob/master/md/event.md)  
[image 图片类](https://github.com/yinhui1129754/dzqm/blob/master/md/image.md)  
[line 线段类](https://github.com/yinhui1129754/dzqm/blob/master/md/line.md)  
[main 核心类](https://github.com/yinhui1129754/dzqm/blob/master/md/main.md)  
[point 点类](https://github.com/yinhui1129754/dzqm/blob/master/md/point.md)  

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

# 在vue-cli中使用我们的组件

详细可以看[在vue中使用此组件](https://github.com/yinhui1129754/dzqm/blob/master/md/dzqm-vue.md)


# 实例对象的时候可传入的参数
|属性名称|描述|默认|
|:-|-:|-:|
|ele|要挂载的节点|null|
|color|签名的颜色|'#333333'|
|lineWidth|签名的线宽|4|
|bgColor|签名的背景颜色|-1|
|pen|签名的笔类型可选择的值：'default' 'writing'|'default'|
|writingMaxLine|当笔是writing的时候我们来设置最大线宽|20|
|writingMinLine|当笔是writing的时候我们来设置最小线宽|10|
|bgImg|背景图片元素 只能传Image对象 img节点 canvas节点|null|
|bgImgDrawCall|绘制的回调函数回调参数 ctx,img,main|null|

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
|toJson|将当前实例签名的数据转化为json字符串<b>这里是json字符串使用一定要JSON.parse才嗯那个jsonTo到画布中</b>|无|json字符串|
|jsonTo|将传入的json数据转化到当前对象|json|无|
|toPng|获取当前签名的base64位数据png类型|无|无|
|toJpeg|获取当前签名的base64位数据jpeg类型|无|无|
|setColor|设置签名的颜色|color:颜色字符串rgb hex均可以|无|
|setLineWidth|设置线宽|lineWidth:线宽|无|
|setBgColor|设置背景颜色|bgColor:颜色字符串rgb hex均可以|无|
|setPen|设置笔的类型|name:'default' 'writing'|无|
|clear|清除签名|无|无|
|setReadOnly|设置只读|type:是否只读|无|
|isEmpty|获取是否签名了|无|返回true表示是没有签名，返回false表示签名了|
|addPen|新增笔的类型可以看这个文档[addPen](https://github.com/yinhui1129754/dzqm/blob/master/addPen.md)|name:笔的名称<br/>url:笔需要的图片地址<br/>penCall:笔需要的绘制回调<br/>loadCall:笔需要的图片加载完成的回调函数<br/>start:鼠标按下回调<br/>move:鼠标移动回调函数<br/>end:结束回调函数|无|

# 添加笔的类型具体可参考代码

```js
        import penCall from "./../untils/penCall" //这里的文件可以打开查看
        main.addPen("default", "", penCall.default.penCall, function () {
            loadIndex++
            if (loadIndex === 2) {
                self.draw.unlock();
            }
        });
        main.addPen("writing", penUrl.writing, penCall.writing.penCall, function () {
            loadIndex++
            if (loadIndex === 2) {
                self.draw.unlock();
            }
        }, penCall.writing.start, penCall.writing.move, penCall.writing.end);

```

## 默认画笔
![默认画笔](https://raw.githubusercontent.com/yinhui1129754/dzqm/master/MD-img/default.png)

## 毛笔画笔

![默认画笔](https://raw.githubusercontent.com/yinhui1129754/dzqm/master/MD-img/writing.png)



# [项目开源地址](https://github.com/yinhui1129754/dzqm)
开源地址：https://github.com/yinhui1129754/dzqm
# 运行项目 
```
 cnpm i
 npm run dev
```


# 更新日志

## 20221007 去掉node-sass包

完善文档 去掉项目无法下载的node-sass包

## 20211028 ver1.1.9

新增main参数 drawMode 

给main加入drawMode绘图模式0 以前的绘制模式 1线段会保留绘制的笔类型，已经绘制的线段不会跟着笔修改而修改  

addPen加入参数 opt 这个参数是一个obj类型目前只有一个属性 drawLine 为了兼容drawMode值为1的时候绘制线段的函数  

drawLine(c2d,line,main,penObj)函数的回调参数有  

c2d绘制上线文,line用户操作的line线段数据,main核心对象main,penObj笔的数据结构  

可以直接把以前的penCall里面绘制线段的方法复制到drawLine里面来 penCall保留是drawMode为0的时候绘制的值  

在addPen中new Line对象的时候要加上main当前的笔类型 不然无法让笔的数据结构存在json中 这个只针对要使用drawMode为1的使用者并且有能力新增笔类型的开发者   

addPen可以结合canvas提供的贝塞尔曲线 可以绘制出更像毛笔绘制的笔迹  