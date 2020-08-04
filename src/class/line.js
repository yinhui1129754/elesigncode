/**
 * 20200804
 * 作者:375361172@qq.com
 * 作用:此文件是一个线段的描述对象 
 *      我们知道线段由点构成所以这里的对象就描述线段的 
 *      任何的笔 无非就是在绘制每一个点之间的距离的时候有不同的操作(即样式)
 * 日期:2020年08月04日
 */
import {createObject,merge} from "./../untils/untils"
import Point from "./point"
/**
 * 创建一个线段类型的构造函数
 */
var obj = createObject("line",function(){
    this.points = []; //储存点
    this.color = "#333333"; //储存颜色
    this.lineWidth = 4;
});
merge(obj.prototype,{
    pushPoint(p){
        this.points.push(p);
    },
    setLineWidth(w){
        this.lineWidth = w;
    },
    copy(){
        var o = new obj();
        var arr = [];
        for(var i =0;i<this.points.length;i++){
            arr.push(this.points[i].copy());
        }
        o.color = this.color;
        o.setLineWidth(this.lineWidth);
        return o;
    },
    setColor(c){
        this.color = c;
    },
    toJson(){
        var arr = [];
        for(var i=0;i<this.points.length;i++){
            arr.push(this.points[i].toJson())
        }
        return {
            points:arr,
            color:this.color,
            lineWidth:this.lineWidth
        }
    },
    jsonTo(json){
        this.color=  json.color;
        this.lineWidth = json.lineWidth;
        for(var i=0;i<json.points.length;i++){
            var buf = new Point(json.points[i].x,json.points[i].y);
            this.points.push(buf);
        }
        return this.points;
    }
})
export default obj;