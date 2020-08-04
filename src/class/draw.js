import {createObject,merge} from "./../untils/untils"
/**
 * 创建一个绘制类型的构造函数
 * @param {cvs节点} cvs 
 * @param {中心对象} main 
 */
var obj = createObject("draw",function(cvs,main){
    this.cvs = cvs; //cvs节点
    this.c2d = cvs.getContext("2d");//canvas绘制上下文
    this.main = main;//中心对象
    this.memCvs = document.createElement("canvas");
    this.memCvs2d = this.memCvs.getContext("2d");
    this.scalc =1;
    this.isLock =false;
});
merge(obj.prototype,{
    init(){

    },
    lock(){
        this.isLock = true;
    },
    unlock(){
        this.isLock = false;
        this.draw();
    },
    resize(w,h){
        this.cvs.setAttribute("width",w);
        this.cvs.setAttribute("height",h);
        this.c2d =   this.cvs.getContext("2d");
        this.memCvs.setAttribute("width",w*this.scalc);
        this.memCvs.setAttribute("height",h*this.scalc);
        this.memCvs2d = this.memCvs.getContext("2d");
        this.draw();
    },
    draw(){
        if(this.main.destoryKey){
            return console.log("object is destory!!");
        }
        if(this.isLock){
            return
        }
        this.main.penList[this.main.pen].penCall(this.main)
        this.c2d.clearRect(0,0, this.cvs.width, this.cvs.height)
        if(this.main.option.bgColor!=-1){
            this.c2d.fillStyle = this.main.option.bgColor
            this.c2d.fillRect(0,0,this.cvs.width, this.cvs.height)
        }
        this.c2d.drawImage(this.memCvs,0,0, this.cvs.width, this.cvs.height)
    }
})
export default obj;