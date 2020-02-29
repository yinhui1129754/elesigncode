import {createObject,merge} from "./../untils/untils"

var obj = createObject("point",function(x,y){
    this.x = x;
    this.y = y;
});
merge(obj.prototype,{
   copy(){
       return new obj(this.x,this.y);
   },
   toJson(){
       return {
           x:this.x,
           y:this.y
       }
   },
   jsonTo(json){
       this.x = json.x;
       this.y = json.y
   }
})
export default obj;