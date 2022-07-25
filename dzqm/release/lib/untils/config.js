/**
 * 20200804
 * 作者:375361172@qq.com
 * 作用:此文件是一个默认配置
 * 日期:2020年08月04日
 */
export default {
    ele: null,
    color: "#333333",
    lineWidth: 4,
    bgColor: -1,
    drawMode: 0,
    pen: "default", //writing
    writingMaxLine: 20, //毛笔最大宽度
    writingMinLine: 10, //毛笔最小宽度
    bgImg:null ,// 必须传入一个不跨域并且是加载完成的图片对象 new Image,img element, canvas element
    bgImgDrawCall:null // 如果要自己绘制背景可以传递这个参数 这个参数是一个函数 (ctx,bgImg,main):void; 如果不传bgImg传了这个参数 那么bgImg就为null
}