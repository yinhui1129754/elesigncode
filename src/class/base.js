/**
 * 20200804
 * 作者:375361172@qq.com
 * 作用:此文件是一个全局基类的描述对象 基类 类似C++的抽象类我们这里的Base只抽象了一个属性即name
 * 日期:2020年08月04日
 */

/**
 * 全局base类
 * @param {对象结构名称} name 
 */
function Base(name){
    this.struct = name;
}
Base.prototype = {
    constructor:Base,
    //虚函数 init
    init(){}
}
export default Base;