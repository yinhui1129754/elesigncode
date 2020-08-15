# 新增笔详细说明

## 笔的添加思路说明

我们提供了四个回调  
绘制回调  
光标开始触摸回调  
光标移动中回调  
光标移动结束回调  
绘制回调：主要用来展示我们光标回调中产生的数据的这里需要自己实现  
光标开始触摸回调：一笔开始的时候我们应该做哪些数据处理这里需要自己实现  
光标移动中回调：一笔绘制中我们应该做哪些数据处理这里需要自己实现  
光标移动结束回调：一笔绘制结束了我们应该做哪些数据处理这里需要自己实现  

## **注意：添加笔了过后有些参数就无法使用了 比如color参数就无法使用了

## core对象暴露的构造函数详细可以看文档
[data 数据类](https://github.com/yinhui1129754/dzqm/blob/master/md/data.md)  
[draw 绘制类](https://github.com/yinhui1129754/dzqm/blob/master/md/draw.md)  
[event 事件类](https://github.com/yinhui1129754/dzqm/blob/master/md/event.md)  
[image 图片类](https://github.com/yinhui1129754/dzqm/blob/master/md/image.md)  
[line 线段类](https://github.com/yinhui1129754/dzqm/blob/master/md/line.md)  
[main 核心类](https://github.com/yinhui1129754/dzqm/blob/master/md/main.md)  
[point 点类](https://github.com/yinhui1129754/dzqm/blob/master/md/point.md)  
```js
EleSign.STRUCT = {
    Draw:Draw, //绘制类的构造函数
    Line:Line, //线条类的构造函数
    Data:Data, //数据类的构造函数
    Point:Point, //点类的构造函数
    ImageLoad:ImageLoad,//图片加载类的构造函数
}
```
## 然后看代码 这份代码演示了添加笔的逻辑
```js
        // 添加自定义画笔
        var m5 = new EleSign({
            ele: document.getElementById("testEle5")
        })
        m5.init()
        // 获取两点之间的距离 通过距离来换算 两点之间应该有多少绘制项
        function distance(a, b) {
            var x = b.x - a.x, y = b.y - a.y;
            return Math.sqrt(x * x + y * y);
        }
        /**
         * addPen方法说明
         * name 笔的名字
         * url 笔可能需要的图片地址
         * penCall 绘制call 相当于展示数据的时候需要绘制的东西 需要手动实现
         * loadCall 图片资源加载完成的回调 这里就可以直接用我们的画笔了
         * start 光标开始触摸
         * move 光标移动中
         * end 光标移动结束
         * 
         * *注意项: 在添加笔之前一定要调用 m5.draw.locak 将绘制给锁起来 
         * 我们把绘制锁起来了过后 在笔完成添加了过后就要解开锁 让绘制可以进行 
         * 
        */
        //锁绘制
        m5.draw.lock()
        m5.addPen("fangkuai", "./1.png", function(main, penObj){
            var self = main.draw
            var arr = self.main.data.buffer
            var i = 0, q = 0, w = 0;
            var c2d = self.memCvs2d;
            c2d.clearRect(0, 0, self.memCvs.width, self.memCvs.height)
            c2d.save();
            c2d.scale(self.scalc, self.scalc);
            for (i = 0; i < arr.length; i++) {
                var pointArr = []
                for (q = arr[i].points.length - 1; q > 0; q--) {
                    var x = arr[i].points[q].x
                    var y = arr[i].points[q].y
                    var p1 = arr[i].points[q]
                    var p2 = arr[i].points[q - 1]
                    var dis = distance(p2, p1)
                    if (p2) {
                        var len2 = Math.round(dis / 2) + 1;
                        for (w = 0; w < len2; w++) {
                            x = p1.x + (p2.x - p1.x) / len2 * w;
                            y = p1.y + (p2.y - p1.y) / len2 * w;
                            pointArr.push({
                                x: x,
                                y: y
                            })
                        }
                    }
                }
                var l = main.option.writingMaxLine
                for (w = pointArr.length - 1; w > 0; w--) {
                    c2d.drawImage(penObj.img, pointArr[w].x, pointArr[w].y, l, l);
                }

            }
            c2d.restore();
        }, function () {
            //解锁绘制 
            m5.draw.unlock();
            m5.setPen("fangkuai")
        }, function (main, penObj, pos) {
            main.dropData.nowLine = new EleSign.STRUCT.Line()
            main.dropData.nowLine.pushPoint(new EleSign.STRUCT.Point(pos.x, pos.y));
            main.data.pushData(main.dropData.nowLine);
        }, function(main, penObj, pos){
            main.dropData.nowLine.pushPoint(new EleSign.STRUCT.Point(pos.x, pos.y));
            main.draw.draw();
        }, function (main, penObj, pos) {
            main.draw.draw();
        });
```