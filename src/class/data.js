import {createObject,merge} from "./../untils/untils"
import Line from "./line"
/**
 * 创建一个data类型的构造函数
 */
var obj = createObject("data",function(main){
    this.buffer = []; // 数据buffer C端用二进制我们这里用json
    this.main = main; // 中心对象
});
merge(obj.prototype,{
    init(){

    },
    getSize(){
        return this.buffer.length;
    },
    pushData(d){
        this.buffer.push(d);
    },
    popData(){
        return this.buffer.pop();
    },
    clear(){
        this.buffer.length = 0;
    },
    toJson(){
        var arr = [];
        for(var i = 0;i<this.buffer.length;i++){
            arr.push(this.buffer[i].toJson());
        }
        return arr;
    },
    jsonTo(json){
        this.clear();
        for(var i = 0;i<json.length;i++){
            var buf = new Line();
            buf.jsonTo(json[i]);
            this.buffer.push(buf);
        }
        
        return this.buffer;
    }
})
export default obj;