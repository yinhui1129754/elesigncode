/**
 * 20200804
 * 作者:375361172@qq.com
 * 作用:此文件储存了不同的笔的绘制情况 
 * 日期:2020年08月04日
 */
export default {
    default:function(main){
        var self = main.draw
        var arr = self.main.data.buffer
        var len = arr.length;
        var i =0,q=0;
        var c2d =  self.memCvs2d;
        var line= null;  
        c2d.clearRect(0,0,self.memCvs.width,self.memCvs.height)
        c2d.save();
        c2d.scale(self.scalc,self.scalc);
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
    },
    writing:function(main){

    }
}