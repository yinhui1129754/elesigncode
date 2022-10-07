/**
 * 20221007
 * 作者:375361172@qq.com
 * 作用:此文件是一个绘图对象的描述文件 绘图对象 分发不同的笔的绘制方法 让此签名core变得更加丰富多彩
 * 日期:2022年10月07日
 */
import { Main } from "../core/main"
import { ENUM_DRAW_LINE_MODE } from "./../untils/untils"
import Base from "./base"

export class Draw extends Base {
  cvs:HTMLCanvasElement
  c2d:CanvasRenderingContext2D
  main:Main
  memCvs:HTMLCanvasElement
  memCvs2d:CanvasRenderingContext2D
  scalc:number
  isLock:boolean
  constructor(cvs:HTMLCanvasElement, main:Main) {
    super("draw")
    this.cvs = cvs // cvs节点
    this.c2d = (cvs.getContext("2d") as CanvasRenderingContext2D) // canvas绘制上下文
    this.main = main// 中心对象
    this.memCvs = document.createElement("canvas")
    this.memCvs2d = this.memCvs.getContext("2d") as CanvasRenderingContext2D
    this.scalc = 1
    this.isLock = false
  }
  init() {}
  lock() {
    this.isLock = true
  }
  unlock() {
    this.isLock = false
    this.draw()
  }
  resize(w:number, h:number) {
    this.cvs.setAttribute("width", w + "")
    this.cvs.setAttribute("height", h + "")
    this.c2d = this.cvs.getContext("2d") as CanvasRenderingContext2D
    this.memCvs.setAttribute("width", w * this.scalc + "")
    this.memCvs.setAttribute("height", h * this.scalc + "")
    this.memCvs2d = this.memCvs.getContext("2d") as CanvasRenderingContext2D
    this.draw()
  }
  draw() {
    if (this.main.destoryKey) {
      return console.log("object is destory!!")
    }
    if (this.isLock) {
      return
    }
    if (this.main.drawMode === ENUM_DRAW_LINE_MODE.DEFAULT) {
      this.main.penList[this.main.pen] && this.main.penList[this.main.pen].penCall(this.main, this.main.penList[this.main.pen])
    } else if (this.main.drawMode === ENUM_DRAW_LINE_MODE.LINE_SAVE) {
      const self = this
      const arr = self.main.data.buffer
      let i = 0
      const c2d = self.memCvs2d
      c2d.clearRect(0, 0, self.memCvs.width, self.memCvs.height)
      c2d.save()
      c2d.scale(self.scalc, self.scalc)
      for (i = 0; i < arr.length; i++) {
        const pen = arr[i].pen || "default"
        if (this.main.penList[pen]) {
          this.main.penList[pen].drawLine(c2d, arr[i], this.main, this.main.penList[pen])
        } else {
          this.main.penList["default"].drawLine(c2d, arr[i], this.main, this.main.penList["default"])
        }
      }
      c2d.restore()
    }

    this.c2d.clearRect(0, 0, this.cvs.width, this.cvs.height)
    if (this.main.option.bgImg) {
      if (this.main.option.bgImgDrawCall) {
        this.main.option.bgImgDrawCall(this.c2d, this.main.option.bgImg, this.main)
      } else {
        this.c2d.drawImage(this.main.option.bgImg, 0, 0, this.cvs.width, this.cvs.height)
      }
    }
    if (this.main.option.bgImgDrawCall) {
      this.main.option.bgImgDrawCall(this.c2d, this.main.option.bgImg, this.main)
    }
    if (this.main.option.bgColor !== -1) {
      this.c2d.fillStyle = this.main.option.bgColor
      this.c2d.fillRect(0, 0, this.cvs.width, this.cvs.height)
    }
    this.c2d.drawImage(this.memCvs, 0, 0, this.cvs.width, this.cvs.height)
  }
}
export default Draw
