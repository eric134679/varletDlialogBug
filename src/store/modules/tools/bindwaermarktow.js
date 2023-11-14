import { defineStore } from 'pinia'
import {ElMessageBox,ElMessage,ElNotification} from 'element-plus'

export const useGetBindWatermarkTowStore = defineStore('useGetBindWatermarkTow', {
    state: () => ({
        waterText:'',
        waterCode:'',
        waterListLog:[]
    }),
    getters:{
        // getWebTitle(state) {
        //     return  state.webTitle = state.webTitle + '- 玉兔AI'
        // },
    },
    actions: {
        setWaterText(value) {
            this.waterText = value
        },
    },
    persist: {
        paths: ['waterText','waterCode','waterListLog'],
        exclude: []
    }
})