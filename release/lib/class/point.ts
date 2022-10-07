/**
 * 20221007
 * 作者:375361172@qq.com
 * 作用:此文件是一个点的描述对象我们这里的二维点用xy属性来描述
 * 日期:2022年10月07日
 */
import Base from "./base"

export interface POINT{
    x:number,
    y:number
}
export class Point extends Base {
  x:number
  y:number
  constructor(x:number, y:number) {
    super("point")
    this.x = x
    this.y = y
  }
  copy() {
    return new Point(this.x, this.y)
  }
  toJson() {
    return {
      x: this.x,
      y: this.y
    }
  }
  jsonTo(json:any) {
    this.x = json.x
    this.y = json.y
  }
}
export default Point
