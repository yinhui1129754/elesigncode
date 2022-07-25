/**
 * 20200804
 * 作者:375361172@qq.com
 * 作用:此文件储存了不同的笔的绘制情况 
 * 日期:2020年08月04日
 */
import Line from "./../class/line"
import Point from "./../class/point"
function distance(a, b) {
    var x = b.x - a.x, y = b.y - a.y;
    return Math.sqrt(x * x + y * y);
}
export default {
    default: {
        penCall: function (main,penObj) {
            var self = main.draw
            var arr = self.main.data.buffer
            var len = arr.length;
            var i = 0, q = 0;
            var c2d = self.memCvs2d;
            var line = null;
            c2d.clearRect(0, 0, self.memCvs.width, self.memCvs.height)
            c2d.save();
            c2d.scale(self.scalc, self.scalc);
            for(var i = 0;i<len;i++){
                this.drawLine&&this.drawLine(c2d,arr[i],main,penObj);
            }
            c2d.restore();
        },
        drawLine:function(c2d,line,main,penObj){
                if(!line.points.length){
                    return;
                }
                c2d.beginPath();
               
                c2d.lineWidth = line.lineWidth;
                c2d.strokeStyle = line.color;
                c2d.lineJoin = "round";
                c2d.lineCap = "round";
                c2d.lineTo(line.points[0].x, line.points[0].y);
                for (var q = 1; q < line.points.length; q++) {
                    c2d.lineTo(line.points[q].x, line.points[q].y);
                }
                c2d.stroke();
                c2d.closePath();
        },
        start: null,
        move: null,
        end: null
    },
    writing: {
        penCall: function (main, penObj) {
            var self = main.draw
            var arr = self.main.data.buffer
            var i = 0;
            var c2d = self.memCvs2d;
            c2d.clearRect(0, 0, self.memCvs.width, self.memCvs.height)
            c2d.save();
            c2d.scale(self.scalc, self.scalc);
            for (i = 0; i < arr.length; i++) {
                this.drawLine&&this.drawLine(c2d,arr[i],main,penObj);
            }
            c2d.restore();
        },
        drawLine:function(c2d,line,main,penObj){
            var q=0,w=0;
            if(!line.points.length){
                return;
            }
            
            var pointArr = []
            for (q = line.points.length - 1; q > 0; q--) {
                var x = line.points[q].x
                var y = line.points[q].y
                var p1 = line.points[q]
                var p2 = line.points[q - 1]
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
                if (pointArr.length > 100 && w < 60) {
                    l = l + 0.2;
                    if (l > main.option.writingMaxLine) l = main.option.writingMaxLine;
                } else {
                    l = l - 0.2;
                    if (l < main.option.writingMinLine) l = main.option.writingMinLine;
                }
                c2d.drawImage(penObj.img, pointArr[w].x, pointArr[w].y, l, l);
            }

        },
        start: function (main, penObj, pos) {
            main.dropData.nowLine = new Line(main.pen)
            main.dropData.nowLine.pushPoint(new Point(pos.x, pos.y));
            main.data.pushData(main.dropData.nowLine);
        },
        move: function (main, penObj, pos) {
            main.dropData.nowLine.pushPoint(new Point(pos.x, pos.y));
            main.draw.draw();
        },
        end: function (main, penObj, pos) {
            main.draw.draw();
        }
    }
}
