/**
 * 20200804
 * 作者:375361172@qq.com
 * 作用:此文件是一个数据描述对象我们知道c端用的是一套有规律的二进制来描述一个储存的对象指针 
 *      那么我们这里根据js的特性，就用一个数组来储存我们的数据
 * 日期:2020年08月04日
 */
import { createObject, merge } from "./../untils/untils"
import Line from "./line"
/**
 * 创建一个data类型的构造函数
 */
var obj = createObject("data", function (main) {
    this.buffer = []; // 数据buffer C端用二进制我们这里用json
    this.main = main; // 中心对象
});
merge(obj.prototype, {
    init() {

    },
    getSize() {
        return this.buffer.length;
    },
    pushData(d) {
        this.buffer.push(d);
    },
    popData() {
        return this.buffer.pop();
    },
    clear() {
        this.buffer.length = 0;
    },
    toJson() {
        var arr = [];
        for (var i = 0; i < this.buffer.length; i++) {
            arr.push(this.buffer[i].toJson());
        }
        return arr;
    },
    jsonTo(json) {
        this.clear();
        for (var i = 0; i < json.length; i++) {
            var buf = new Line();
            buf.jsonTo(json[i]);
            this.buffer.push(buf);
        }

        return this.buffer;
    }
})
export default obj;