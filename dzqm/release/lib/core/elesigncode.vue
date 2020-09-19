<template>
    <div class="elesigncode-vue"></div>
</template>

<script>
import ElesignCode from "./main.js"
export default {
    name:"ElesignCodeEx",
    props:{
        pen:{
            default:"default"
        },
        color:{
            default:"#333"
        },
        lineWidth:{
            default:4
        },
        bgColor:{
            default:-1
        },
        writingMaxLine:{
            default:20
        },
        writingMinLine:{
            default:10
        },
        datas:null
    },
    data:function(){
        return {}
    },
    mounted(){
        this.signcodeEx = new ElesignCode({
            writingMaxLine:this.writingMaxLine,
            writingMinLine:this.writingMinLine,
        })
        this.signcodeEx.init()
        this.signcodeEx.moutedEle(this.$el)
        this.signcodeEx.setPen(this.pen)
        this.signcodeEx.setColor(this.color)
        this.signcodeEx.setLineWidth(this.lineWidth)
        this.signcodeEx.setBgColor(this.bgColor)
        this.datas&&this.signcodeEx.jsonTo(this.datas)
    },
    methods:{
        undo(){
            this.signcodeEx.undo()
        },
        redo(){
            this.signcodeEx.redo()
        },
        resize(){
            this.signcodeEx.resize()    
        },
        resizeWithNumber(w,h){
            this.signcodeEx.resizeWithNumber(w,h)
        },
        getJson(){
            return this.signcodeEx.toJson()
        },
        toJson(){
            return this.getJson()
        },
        jsonTo(json){
            return this.signcodeEx.jsonTo(json)
        },
        toPng(){
            return this.signcodeEx.toPng()
        },
        toJpeg(){
            return this.signcodeEx.toJpeg()
        },
        setPen(pen){
            return this.signcodeEx.setPen(pen)
        }
    },
    watch:{
        "$props.datas":{
            deep:true,
            handler(){
                this.datas&&this.signcodeEx.jsonTo(this.datas)
            }
        },
        "$props.writingMaxLine":{
            deep:true,
            handler(){
                this.signcodeEx.option.writingMaxLine = this.writingMaxLine
                this.signcodeEx.draw.draw()
            }
        },
        "$props.writingMinLine":{
            deep:true,
            handler(){
                this.signcodeEx.option.writingMinLine = this.writingMinLine
                this.signcodeEx.draw.draw()
            }
        },
        "$props.bgColor":{
            deep:true,
            handler(){
                this.signcodeEx.setBgColor(this.bgColor)
            }
        },
        "$props.lineWidth":{
            deep:true,
            handler(){
                this.signcodeEx.setLineWidth(this.lineWidth)
            }
        },
        "$props.color":{
            deep:true,
            handler(){
                this.signcodeEx.setColor(this.color)
            }
        },
        "$props.pen":{
            deep:true,
            handler(){
                this.signcodeEx.setPen(this.pen)
            }
        }
    },
    beforeDestroy(){
        this.signcodeEx.destory()
        this.signcodeEx = null
    }
}
</script>

<style>
    .elesigncode-vue{
        width: 100%;
        height: 100%;
    }
</style>