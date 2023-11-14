import { defineStore } from 'pinia'
import {ElMessageBox,ElMessage,ElNotification} from 'element-plus'

export const useGetTemplateStore = defineStore('useGetTemplate', {
    state: () => ({
        template_arr:[],
        category:[],
    }),
    getters:{
        // getWebTitle(state) {
        //     return  state.webTitle = state.webTitle + '- 玉兔AI'
        // },
    },
    actions: {
        setCategory(value){
            this.category.push(value)
        },
        setTemplate_arr(value) {
            this.template_arr.push(value)
        },
    },
    persist: {
        paths: ['template_arr','category'],
    }
})