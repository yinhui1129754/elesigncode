/**
 * 20221007
 * 作者:375361172@qq.com
 * 作用:此文件的js是用来管理画笔加载的图片js
 * 日期:2022年10月07日
 */
import { Main } from "../core/main"
import Base from "./base"
export class ImageManager extends Base {
  main:Main
  constructor(m:Main) {
    super("imageManager")
    this.main = m
  }
  // 加载一张图片的方法
  load(url:string, call:any) {
    const img = new Image()
    img.src = url
    if (img.complete) {
      call && call(img, url, 1)
    } else {
      img.onload = function() {
        call && call(img, url, 1)
        img.onload = null
      }
      img.onerror = function() {
        const cvs = document.createElement("canvas")
        cvs.width = 20
        cvs.height = 20
        call && call(cvs, url, 0)
      }
    }
  }
  loadArr(arr:string[], call:((imgObj:any)=>void)) {
    let i
    let loadIndex = 0
    const imgObj = {}
    for (i = 0; i < arr.length; i++) {
      this.load(arr[i], function(img:any, url:string, isSuccess:boolean) {
        loadIndex++
        imgObj[url] = {
          img: img,
          isSuccess: isSuccess
        }
        if (loadIndex === arr.length) {
          call && call(imgObj)
        }
      })
    }
  }
}
export default ImageManager
