/**
 * 20221007
 * 作者:375361172@qq.com
 * 作用:此文件是一个core核心对象类 用来聚合我们编写的各种对象管理
 *      从而可以达到暴露给使用者使用的那种对象，可以看到该对象的方法
 *      其实是来调用其他的一个一个分类对象
 * 日期:2022年10月07日
 */

// 导入创建对象的方法和合并的方法
import utils, { getOffsetLeft, getOffsetTop, proxyCall, ENUM_DRAW_LINE_MODE } from "./../untils/untils"
// 导入默认配置项
import config from "./../untils/config"
// 绘制构造函数
import { Draw } from "./../class/draw"
// 数据构造函数
import { Data } from "./../class/data"
import { MessageManager } from "./../class/event"
import { Line } from "./../class/line"
import { Point } from "../class/point"
import { ImageManager } from "./../class/image"
import penCall from "./../untils/penCall"
import penUrl from "./../untils/penUrl"
import Base from "../class/base"
interface DropData{
  startX?:number,
  startY?:number,
  nowLine?:Line|null,
  start?:boolean
}
interface EventData{
  clientX:number
  clientY:number
}
export class Main extends Base {
  option:any
  cvs:HTMLCanvasElement
  draw:Draw
  data:Data
  image:ImageManager
  redoData:Data
  event:MessageManager
  readOnly:boolean
  dropData:DropData
  drawMode:ENUM_DRAW_LINE_MODE
  penList:any
  pen:string
  destoryKey:any
  constructor(option:any) {
    super("main")
    this.option = utils.merge({}, config, option)
    this.cvs = document.createElement("canvas")
    this.draw = new Draw(this.cvs, this)
    this.data = new Data(this)
    this.image = new ImageManager(this)
    this.redoData = new Data(this)
    this.event = new MessageManager(this)
    this.readOnly = false // 是否是只读
    this.dropData = {
      start: false,
      startX: 0,
      startY: 0,
      nowLine: null
    }
    this.drawMode = option.drawMode || ENUM_DRAW_LINE_MODE.DEFAULT // 绘制模式
    this.penList = {}
    this.pen = this.option.pen // 绘图的画笔
  }
  setReadOnly(type:boolean) {
    this.readOnly = type
  }
  isEmpty() {
    return !this.data.getSize()
  }
  init() {
    const self = this
    let loadIndex = 0
    if (this.option.ele) {
      this.option.ele.appendChild(this.cvs)
      this.resize()
    }
    this.draw.lock()
    this.draw.draw()
    this.event.bindEvent(this.cvs)
    this.addPen("default", "", penCall.default.penCall, function() {
      loadIndex++
      if (loadIndex === 2) {
        self.draw.unlock()
      }
    }, null, null, null, {
      drawLine: penCall.default.drawLine
    })
    this.addPen("writing", penUrl.writing, penCall.writing.penCall, function() {
      loadIndex++
      if (loadIndex === 2) {
        self.draw.unlock()
      }
    }, penCall.writing.start, penCall.writing.move, penCall.writing.end, {
      drawLine: penCall.writing.drawLine
    })
  }
  moutedEle(e:HTMLElement) {
    this.option.ele = e
    if (this.option.ele) {
      this.option.ele.appendChild(this.cvs)
      this.resize()
    }
    this.draw.draw()
  }
  resize() {
    const w = this.option.ele.clientWidth
    const h = this.option.ele.clientHeight
    this.draw.resize(w, h)
    this.draw.draw()
  }
  resizeWithNumber(w:number, h:number) {
    this.draw.resize(w, h)
    this.draw.draw()
  }
  setColor(v:any) {
    this.option.color = v
  }
  setLineWidth(v:number) {
    this.option.lineWidth = v
  }
  setBgColor(v:any) {
    this.option.bgColor = v
    this.draw.draw()
  }
  clear() {
    this.data.clear()
    this.redoData.clear()
    this.draw.draw()
  }
  destory() {
    this.data.clear()
    this.redoData.clear()
    this.event.unbindEvent(this.cvs)
    if (this.cvs.parentNode) {
      this.cvs.parentNode.removeChild(this.cvs)
    }
    for (const i in this) {
      delete this[i]
    }
    proxyCall(this, "destoryKey", null, null, 1, () => { return true })
  }

  undo() {
    if (this.readOnly) {
      return
    }
    const b = this.data.popData()
    if (b) {
      this.redoData.pushData(b)
      this.draw.draw()
    }
  }
  redo() {
    if (this.readOnly) {
      return
    }
    const b = this.redoData.popData()
    if (b) {
      this.data.pushData(b)
      this.draw.draw()
    }
  }
  toJson() {
    return JSON.stringify({
      data: this.data.toJson(),
      color: this.option.color,
      lineWidth: this.option.lineWidth,
      bgColor: this.option.bgColor,
      pen: this.option.pen,
      writingMaxLine: this.option.writingMaxLine,
      writingMinLine: this.option.writingMinLine,
      drawMode: this.drawMode
    })
  }
  jsonTo(json:any) {
    this.data.jsonTo(json.data)
    this.option.color = json.color
    this.option.lineWidth = json.lineWidth
    this.option.bgColor = json.bgColor
    this.option.pen = json.pen
    this.option.writingMaxLine = json.writingMaxLine
    this.option.writingMinLine = json.writingMinLine
    this.option.drawMode = json.drawMode
    this.draw.draw()
  }
  pointStart(event:EventData) {
    if (!this.dropData.start) {
      const eleX = event.clientX - getOffsetLeft(this.cvs)
      const eleY = event.clientY - getOffsetTop(this.cvs)
      this.dropData.start = true
      if (this.penList[this.pen].start) {
        this.penList[this.pen].start(this, this.penList[this.pen], {
          x: eleX,
          y: eleY
        })
      } else {
        this.dropData.startX = eleX
        this.dropData.startY = eleY
        this.dropData.nowLine = new Line(this.pen)
        this.dropData.nowLine.setLineWidth(this.option.lineWidth)
        this.dropData.nowLine.setColor(this.option.color)
        this.data.pushData(this.dropData.nowLine)
        this.draw.draw()
      }
    }
  }
  pointMove(event:EventData) {
    if (this.dropData.start) {
      const eleX = event.clientX - getOffsetLeft(this.cvs)
      const eleY = event.clientY - getOffsetTop(this.cvs)
      if (this.penList[this.pen].move) {
        this.penList[this.pen].move(this, this.penList[this.pen], {
          x: eleX,
          y: eleY
        })
      } else {
        if (this.dropData.nowLine) {
          this.dropData.nowLine.pushPoint(new Point(eleX, eleY))
        }

        this.draw.draw()
      }
    }
  }
  pointEnd(event:EventData) {
    if (this.dropData.start) {
      this.dropData.start = false
      const eleX = event.clientX - getOffsetLeft(this.cvs)
      const eleY = event.clientY - getOffsetTop(this.cvs)
      if (this.penList[this.pen].end) {
        this.penList[this.pen].end(this, this.penList[this.pen], {
          x: eleX,
          y: eleY
        })
      } else {
        this.draw.draw()
      }
    }
  }
  drawEle() {
    this.draw.draw()
  }
  toPng() {
    this.draw.draw()
    return this.cvs.toDataURL("image/png")
  }
  toJpeg() {
    let b = false
    let base64Str = ""
    if (this.option.bgColor === -1) {
      this.option.bgColor = "white"
      b = true
    }
    this.draw.draw()
    base64Str = this.cvs.toDataURL("image/jpeg")
    if (b) {
      this.option.bgColor = -1
      this.draw.draw()
    }
    return base64Str
  }
  /**
     * 提取颜色的R、G、B值
     * @param {String} color #abc | #abcdef | rgb(255,255,255) | rgba(255,255,255,1)
     * @returns [R,G,B] | [R,G,B,A]
     */
  getColorRGBs(color:string) {
    // 16进制颜色值的正则
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    // 把颜色值变成小写
    color = color.toLowerCase()
    let i
    if (reg.test(color)) {
      // 如果只有三位的值，需变成六位，如：#fff => #ffffff
      if (color.length === 4) {
        let colorNew = "#"
        for (i = 1; i < 4; i += 1) {
          colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1))
        }
        color = colorNew
      }
      // 处理六位的颜色值，转为RGB
      const colorArr = [] as any[]
      for (i = 1; i < 7; i += 2) {
        colorArr.push(parseInt("0x" + color.slice(i, i + 2)))
      }
      return colorArr
    } else {
      if (color.includes("rgb")) {
        try {
          // 如果是rgb颜色，返回数组长度为3，如：[255,255,255]；如果是rgba颜色，返回数组长度为4，如：[255,255,255,1]
          return color.split("(")[1].split(")")[0].split(",")
        } catch (error) {
          return [0, 0, 0]
        }
      } else {
        return [0, 0, 0]
      }
    }
  }
  setPen(name:string) {
    this.pen = name
    this.draw.draw()
  }
  setDrawMode(mode:ENUM_DRAW_LINE_MODE) {
    this.drawMode = mode
    this.draw.draw()
  }
  getDrawMode() {
    return this.drawMode
  }
  addPen(name:string, url:string, penCall:any, loadCall:any, start:any, move:any, end:any, opt:any) {
    const self = this
    this.penList[name] = {
      url: url,
      penCall: penCall,
      img: null,
      isSuccess: 0,
      start: start,
      move: move,
      end: end,
      drawLine: opt && opt.drawLine
    }
    this.image.load(url, function(img:any, urlCall:any, isSuccess:boolean) {
      if (url) {
        const colorTransformCvs = document.createElement("canvas")
        colorTransformCvs.width = img.width
        colorTransformCvs.height = img.height
        const colorTransformCtx = colorTransformCvs.getContext("2d") as CanvasRenderingContext2D
        colorTransformCtx.drawImage(img, 0, 0)
        const imageData = colorTransformCtx.getImageData(0, 0, img.width, img.height)
        const data = imageData.data
        const colorArr = self.getColorRGBs(self.option.color) // 画笔颜色RGB值的数组
        for (let i = 0; i < data.length; i += 4) {
          // 非透明的像素点，颜色转为画笔颜色
          if (data[i + 3] !== 0) {
            data[i] = colorArr[0]
            data[i + 1] = colorArr[1]
            data[i + 2] = colorArr[2]
          }
        }
        // 清除画布，并将处理后的像素点写入画布
        colorTransformCtx.clearRect(0, 0, img.width, img.height)
        colorTransformCtx.putImageData(imageData, 0, 0)
        const newImg = new Image()
        const src = colorTransformCvs.toDataURL("image/png")
        newImg.crossOrigin = "Anonymous"
        newImg.onload = function() {
          self.penList[name].img = newImg
          self.penList[name].isSuccess = isSuccess
          loadCall && loadCall(self)
          self.draw.draw()
        }
        newImg.src = src
      } else {
        self.penList[name].img = img
        self.penList[name].isSuccess = isSuccess
        loadCall && loadCall(self)
        self.draw.draw()
      }
    })
  }
  static STRUCT = {
    Draw: Draw,
    Line: Line,
    Data: Data,
    Point: Point,
    ImageLoad: ImageManager,
    ENUM_DRAW_LINE_MODE: ENUM_DRAW_LINE_MODE
  }
}
if (window) {
  const win = window as any
  win.EleSign = Main
}
export default Main
