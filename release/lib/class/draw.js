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
});
merge(obj.prototype,{
    init(){

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
        var arr = this.main.data.buffer
        var len = arr.length;
        var i =0,q=0;
        var c2d =  this.memCvs2d;
        var line= null;  
        c2d.clearRect(0,0,this.memCvs.width,this.memCvs.height)
        c2d.save();
        c2d.scale(this.scalc,this.scalc);
        for(i;i<len;i++){
          
          
            c2d.beginPath();
            line = arr[i];
            if(!line.points.length>0){
                continue;
            }
            c2d.lineWidth = line.lineWidth;
            c2d.strokeStyle = line.color;
            c2d.lineJoin="round";
            c2d.lineCap="round";
         //   c2d.globalCompositeOperation = 'source-atop'
            c2d.lineTo(line.points[0].x,line.points[0].y);
            for(q=1;q<line.points.length;q++){
                c2d.lineTo(line.points[q].x,line.points[q].y);
            }
            c2d.stroke();
            c2d.closePath();
           
        }
        c2d.restore();
        this.c2d.clearRect(0,0, this.cvs.width, this.cvs.height)
        if(this.main.option.bgColor!=-1){
            this.c2d.fillStyle = this.main.option.bgColor
            this.c2d.fillRect(0,0,this.cvs.width, this.cvs.height)
        }
        this.c2d.drawImage(this.memCvs,0,0, this.cvs.width, this.cvs.height)
    }
})
export default obj;