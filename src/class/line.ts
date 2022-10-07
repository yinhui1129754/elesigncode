/**
 * 20221007
 * 作者:375361172@qq.com
 * 作用:此文件是一个线段的描述对象
 *      我们知道线段由点构成所以这里的对象就描述线段的
 *      任何的笔 无非就是在绘制每一个点之间的距离的时候有不同的操作(即样式)
 * 日期:2022年10月07日
 */
import Base from "./base"
import Point, { POINT } from "./point"

export class Line extends Base {
  points:POINT[]
  color:string
  lineWidth:number
  pen:string
  constructor(penName?:string) {
    super("line")
    this.points = [] // 储存点
    this.color = "#333333" // 储存颜色
    this.lineWidth = 4
    this.pen = penName || "default"
  }
  setPen(penName:string) {
    this.pen = penName
  }
  getPen() {
    return this.pen
  }
  pushPoint(p:POINT) {
    this.points.push(p)
  }
  unshiftPoint(p:POINT) {
    this.points.unshift(p)
  }
  setLineWidth(w:number) {
    this.lineWidth = w
  }
  copy() {
    const o = new Line(this.pen)
    const arr = [] as POINT[]
    for (let i = 0; i < this.points.length; i++) {
      arr.push(new Point(this.points[i].x, this.points[i].y))
    }
    o.color = this.color
    o.setLineWidth(this.lineWidth)
    return o
  }
  setColor(c:any) {
    this.color = c
  }
  toJson() {
    const arr = [] as POINT[]
    for (let i = 0; i < this.points.length; i++) {
      arr.push({
        x: this.points[i].x,
        y: this.points[i].y
      })
    }
    return {
      points: arr,
      color: this.color,
      lineWidth: this.lineWidth,
      pen: this.pen
    }
  }
  jsonTo(json:any) {
    this.color = json.color
    this.lineWidth = json.lineWidth
    this.pen = json.pen
    for (let i = 0; i < json.points.length; i++) {
      const buf = new Point(json.points[i].x, json.points[i].y)
      this.points.push(buf)
    }
    return this.points
  }
}
export default Line
