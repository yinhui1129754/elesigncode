# 数据类对象的说明

## 属性
|属性名称|描述|详细描述|
|:-|-:|-:|
|buffer|一个储存数据的数组(数据buffer C端用二进制我们这里用json)|无|
|main|储存我们的core对象|core对象[core](#)|

## 方法
|方法名称|方法说明|参数说明|返回说明|
|:-|-:|-:|-:|
|getSize(void)|获取数据长度|无|无|
|pushData(item)|在数组的最后插入一个item数据|item:插入的数据|无|
|popData(void)|移出最后一个数据|无|无|
|clear(void)|清空数据|无|无|
|toJson(void)|返回一个调用了所有item的toJson方法的数组|无|返回一个可以储存的json数据|
|jsonTo(json)|让json数据重现到该对象中|json:要重现的json数据|无|


## 各个类的详细说明
[data 数据类](https://github.com/yinhui1129754/dzqm/blob/master/md/data.md)  
[draw 绘制类](https://github.com/yinhui1129754/dzqm/blob/master/md/draw.md)  
[event 事件类](https://github.com/yinhui1129754/dzqm/blob/master/md/event.md)  
[image 图片类](https://github.com/yinhui1129754/dzqm/blob/master/md/image.md)  
[line 线段类](https://github.com/yinhui1129754/dzqm/blob/master/md/line.md)  
[main 核心类](https://github.com/yinhui1129754/dzqm/blob/master/md/main.md)  
[point 点类](https://github.com/yinhui1129754/dzqm/blob/master/md/point.md)  