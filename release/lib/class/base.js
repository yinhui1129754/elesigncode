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