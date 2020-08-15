# 绘制类对象的说明

## 属性
|属性名称|描述|详细描述|
|:-|-:|-:|
|cvs|与core对象储存的cvs储存的是同一个节点储存的是canvas节点|无|
|c2d|储存绘制上下文|无|
|main|储存我们的core对象|core对象[core](#)|
|memCvs|储存内存绘制canvas节点|无|
|memCvs2d|储存内存绘制上下文|无|
|isLock|储存是否锁上|无|

## 方法
|方法名称|方法说明|参数说明|返回说明|
|:-|-:|-:|-:|
|lock(void)|锁上当前的实例后续的绘制不会进行绘制|无|无|
|unlock(void)|解锁挡墙的绘制对象|无|无|
|resize(w,h)|重置绘制区域大小|w:要重置的宽度,h:要重置的高度|无|
|draw(void)|绘制数据的方法会调用笔的penCall方法|无|无|


## 各个类的详细说明
[data 数据类](https://github.com/yinhui1129754/dzqm/blob/master/md/data.md)  
[draw 绘制类](https://github.com/yinhui1129754/dzqm/blob/master/md/draw.md)  
[event 事件类](https://github.com/yinhui1129754/dzqm/blob/master/md/event.md)  
[image 图片类](https://github.com/yinhui1129754/dzqm/blob/master/md/image.md)  
[line 线段类](https://github.com/yinhui1129754/dzqm/blob/master/md/line.md)  
[main 核心类](https://github.com/yinhui1129754/dzqm/blob/master/md/main.md)  
[point 点类](https://github.com/yinhui1129754/dzqm/blob/master/md/point.md)  