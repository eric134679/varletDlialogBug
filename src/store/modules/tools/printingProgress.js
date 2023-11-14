import { defineStore } from 'pinia'
import {ElMessageBox,ElMessage,ElNotification} from 'element-plus'

export const useGetPprStore = defineStore('useGetPpr', {
    state: () => ({
        textTemplate_default:`您好亲，这边确认到您的卡片在今早已经完成最后的压线工艺，现在正在等待包装发货了哦，我们是下午晚上统一发货的，还请您耐心等待一下哈`,
        textTemplate:`您好亲，这边确认到您的卡片在今早已经完成最后的压线工艺，现在正在等待包装发货了哦，我们是下午晚上统一发货的，还请您耐心等待一下哈`,
        textTemplate_default_back:'',
        ClipBoard:'',
        template_button_completed:[],
        template_button_notCompleted:[]

    }),
    getters:{
        // getWebTitle(state) {
        //     return  state.webTitle = state.webTitle + '- 玉兔AI'
        // },
    },
    actions: {
        setTextTemplate_default_back(value){
            this.textTemplate_default_back = value
            ElMessage.success('默认模板设置成功')
        },
        setTextTemplate(value) {
            console.log(value)
            this.textTemplate = value
        },
        setDefaultTemplate(status){ // 重置
            if(status){
                this.textTemplate =  this.textTemplate_default
            }else{
                this.textTemplate =  this.textTemplate_default_back === '' ? this.textTemplate_default :  this.textTemplate_default_back
            }
            ElMessage.success('模板重置成功')
        }
    },
    persist: {
        paths: ['textTemplate', 'ClipBoard','template_button_completed','template_button_notCompleted','textTemplate_default_back'],
        exclude: ['textTemplate_default']
    }
})