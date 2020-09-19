# core核心类的详细说明


## 属性
|属性名称|描述|详细描述|
|:-|-:|-:|
|option|储存new构造函数的时候传入的参数|无|
|cvs|储存我们的canvas节点|无|
|draw|储存绘制方法的对象|draw对象详细看文档[draw 绘制类](https://github.com/yinhui1129754/dzqm/blob/master/md/draw.md)|
|data|储存我们的数据对象|data对象详细看文档[data 数据类](https://github.com/yinhui1129754/dzqm/blob/master/md/data.md)|
|image|储存我们的图片加载对象|image对象详细看文档[image 图片类](https://github.com/yinhui1129754/dzqm/blob/master/md/image.md)|
|redoData|储存我们的撤销数据与data构成了重做和撤销的数据|data对象详细看文档[data 数据类](https://github.com/yinhui1129754/dzqm/blob/master/md/data.md)|
|event|储存了我们的事件对象|event对象详细看文档[event 事件类](https://github.com/yinhui1129754/dzqm/blob/master/md/event.md)|
|pen|储存我们当前的绘制笔的类型名称|无|
|penList|储存我们的所有笔的相关绘制信息|无|

## 方法
|方法名称|方法说明|参数说明|返回说明|
|:-|-:|-:|-:|
|init(void)|初始化调用|无|无|
|moutedEle(ele)|将签名的节点挂载到传入的参数节点上|ele:要挂载的节点|无|
|resize(void)|根据被挂载的目标节点的大小修改签名区域的大小|无|无|
|resizeWithNumber(w,h)|根据传入的大小进行修改签名的大小|w:签名的宽度(px),h:签名的高度(px)|无|
|setColor(color)|当笔是默认笔的时候我们可以使用该方法来设置签名的颜色|color:要设置的签名颜色("#fff","rgba(100,100,100,1)")|无|
|setLineWidth(width)|当笔是默认笔的时候我们可以使用该方法来设置签名的线宽|width:要设置的签名线宽|无|
|setBgColor(color)|设置我们的画板背景颜色|color:要设置的背景颜色("#fff","rgba(100,100,100,1)")|无|
|destory(void)|销毁我们的当前对象清除数据 移出事件 打上被销毁属性|无|无|
|undo(void)|撤销方法|无|无|
|redo(void)|重做方法|无|无|
|toJson(void)|将对象转换为json对象|无|无|
|jsonTo(json)|将json数据转化为当前的数据对象|json:要转化的数据|无|
|drawEle(void)|绘制数据|无|无|
|toPng(void)|导出base64位的png图片数据|无|无|
|toJpeg(void)|导出base64位的jpeg图片数据|无|无|
|clear|清除签名|无|无|
|setPen(name)|设置当前的笔类型|name:要设置的笔的名称|无|
|addPen|详细说明可以看这个文档[addPen](https://github.com/yinhui1129754/dzqm/blob/master/addPen.md)|无|无|

## core对象暴露的构造函数详细可以看文档

```js
EleSign.STRUCT = {
    Draw:Draw, //绘制类的构造函数
    Line:Line, //线条类的构造函数
    Data:Data, //数据类的构造函数
    Point:Point, //点类的构造函数
    ImageLoad:ImageLoad,//图片加载类的构造函数
}
```


## 各个类的详细说明
[data 数据类](https://github.com/yinhui1129754/dzqm/blob/master/md/data.md)  
[draw 绘制类](https://github.com/yinhui1129754/dzqm/blob/master/md/draw.md)  
[event 事件类](https://github.com/yinhui1129754/dzqm/blob/master/md/event.md)  
[image 图片类](https://github.com/yinhui1129754/dzqm/blob/master/md/image.md)  
[line 线段类](https://github.com/yinhui1129754/dzqm/blob/master/md/line.md)  
[main 核心类](https://github.com/yinhui1129754/dzqm/blob/master/md/main.md)  
[point 点类](https://github.com/yinhui1129754/dzqm/blob/master/md/point.md)  