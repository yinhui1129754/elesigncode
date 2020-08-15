# 线条类对象的说明

## 属性
|属性名称|描述|详细描述|
|:-|-:|-:|
|points|储存我们的点数据|无|
|lineWidth|储存线宽|无|
|color|储存我们的绘制颜色|无|

## 方法
|方法名称|方法说明|参数说明|返回说明|
|:-|-:|-:|-:|
|pushPoint(p)|往points数组最后插入数据|p:要插入的point对象[point](#)|无|
|unshiftPoint(p)|往points数组最开始插入数据|p:要插入的point对象[point](#)|无|
|setLineWidth(width)|设置线宽|width:要设置的线宽|无|无|
|copy(void)|返回一个和当前对象一样的实例对象|无|返回一个和当前对象一样的实例对象|
|setColor(color)|设置当前线的颜色|color:要设置的背景颜色("#fff","rgba(100,100,100,1)")|无|
|toJson(void)|转化为json数据|无|无|
|jsonTo(json)|json数据转化为当前对象|json:json数据|无|


## 各个类的详细说明
[data 数据类](https://github.com/yinhui1129754/dzqm/blob/master/md/data.md)  
[draw 绘制类](https://github.com/yinhui1129754/dzqm/blob/master/md/draw.md)  
[event 事件类](https://github.com/yinhui1129754/dzqm/blob/master/md/event.md)  
[image 图片类](https://github.com/yinhui1129754/dzqm/blob/master/md/image.md)  
[line 线段类](https://github.com/yinhui1129754/dzqm/blob/master/md/line.md)  
[main 核心类](https://github.com/yinhui1129754/dzqm/blob/master/md/main.md)  
[point 点类](https://github.com/yinhui1129754/dzqm/blob/master/md/point.md)  