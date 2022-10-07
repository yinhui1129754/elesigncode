/**
 * 20221007
 * 作者:375361172@qq.com
 * 作用:此文件储存了不同的笔的绘制情况
 * 日期:2022年10月07日
 */
import Line from "./../class/line"
import Point, { POINT } from "../class/point"
import Main from "../core/main"
function distance(a:POINT, b:POINT) {
  const x = b.x - a.x; const y = b.y - a.y
  return Math.sqrt(x * x + y * y)
}
export default {
  default: {
    penCall: function(main:Main, penObj:any) {
      const self = main.draw
      const arr = self.main.data.buffer
      const len = arr.length
      let i = 0 // const q = 0
      const c2d = self.memCvs2d
      // const line = null
      c2d.clearRect(0, 0, self.memCvs.width, self.memCvs.height)
      c2d.save()
      c2d.scale(self.scalc, self.scalc)
      for (i = 0; i < len; i++) {
        this.drawLine && this.drawLine(c2d, arr[i], main, penObj)
      }
      c2d.restore()
    },
    drawLine: function(c2d:CanvasRenderingContext2D, line:Line, main:Main, penObj:any) {
      if (!line.points.length) {
        return
      }
      c2d.beginPath()

      c2d.lineWidth = line.lineWidth
      c2d.strokeStyle = line.color
      c2d.lineJoin = "round"
      c2d.lineCap = "round"
      c2d.lineTo(line.points[0].x, line.points[0].y)
      for (let q = 1; q < line.points.length; q++) {
        c2d.lineTo(line.points[q].x, line.points[q].y)
      }
      c2d.stroke()
      c2d.closePath()
    },
    start: null,
    move: null,
    end: null
  },
  writing: {
    penCall: function(main:Main, penObj:any) {
      const self = main.draw
      const arr = self.main.data.buffer
      let i = 0
      const c2d = self.memCvs2d
      c2d.clearRect(0, 0, self.memCvs.width, self.memCvs.height)
      c2d.save()
      c2d.scale(self.scalc, self.scalc)
      for (i = 0; i < arr.length; i++) {
        this.drawLine && this.drawLine(c2d, arr[i], main, penObj)
      }
      c2d.restore()
    },
    drawLine: function(c2d:CanvasRenderingContext2D, line:Line, main:Main, penObj:any) {
      let q = 0; let w = 0
      if (!line.points.length) {
        return
      }

      const pointArr = [] as any[]
      for (q = line.points.length - 1; q > 0; q--) {
        let x = line.points[q].x
        let y = line.points[q].y
        const p1 = line.points[q]
        const p2 = line.points[q - 1]
        const dis = distance(p2, p1)
        if (p2) {
          const len2 = Math.round(dis / 2) + 1
          for (w = 0; w < len2; w++) {
            x = p1.x + (p2.x - p1.x) / len2 * w
            y = p1.y + (p2.y - p1.y) / len2 * w
            pointArr.push({
              x: x,
              y: y
            })
          }
        }
      }
      let l = main.option.writingMaxLine
      for (w = pointArr.length - 1; w > 0; w--) {
        if (pointArr.length > 100 && w < 60) {
          l = l + 0.2
          if (l > main.option.writingMaxLine) l = main.option.writingMaxLine
        } else {
          l = l - 0.2
          if (l < main.option.writingMinLine) l = main.option.writingMinLine
        }
        c2d.drawImage(penObj.img, pointArr[w].x, pointArr[w].y, l, l)
      }
    },
    start: function(main:Main, penObj:any, pos:POINT) {
      main.dropData.nowLine = new Line(main.pen)
      main.dropData.nowLine.pushPoint(new Point(pos.x, pos.y))
      main.data.pushData(main.dropData.nowLine)
    },
    move: function(main:Main, penObj:any, pos:POINT) {
      main.dropData.nowLine.pushPoint(new Point(pos.x, pos.y))
      main.draw.draw()
    },
    end: function(main:Main, penObj:any, pos:POINT) {
      main.draw.draw()
    }
  }
}
