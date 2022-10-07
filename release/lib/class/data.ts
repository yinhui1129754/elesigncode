/**
 * 20221007
 * 作者:375361172@qq.com
 * 作用:此文件是一个数据描述对象我们知道c端用的是一套有规律的二进制来描述一个储存的对象指针
 *      那么我们这里根据js的特性，就用一个数组来储存我们的数据
 * 日期:2022年10月07日
 */
import { Main } from "../core/main"
import Base from "./base"
import Line from "./line"
export class Data extends Base {
  buffer:any[]
  main:Main
  constructor(main:Main) {
    super("data")
    this.buffer = []
    this.main = main
  }
  init() {

  }
  getSize() {
    return this.buffer.length
  }
  pushData(d:any) {
    this.buffer.push(d)
  }
  popData() {
    return this.buffer.pop()
  }
  clear() {
    this.buffer.length = 0
  }
  toJson() {
    const arr = [] as any[]
    for (let i = 0; i < this.buffer.length; i++) {
      arr.push(this.buffer[i].toJson())
    }
    return arr
  }
  jsonTo(json:any) {
    this.clear()
    for (let i = 0; i < json.length; i++) {
      const buf = new Line()
      buf.jsonTo(json[i])
      this.buffer.push(buf)
    }

    return this.buffer
  }
}

export default Data
