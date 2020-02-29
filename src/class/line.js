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