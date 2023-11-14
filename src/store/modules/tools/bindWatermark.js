import { defineStore } from 'pinia'
import {ElMessageBox,ElMessage,ElNotification} from 'element-plus'

export const useGetBindWatermarkStore = defineStore('useGetBindWatermark', {
    state: () => ({
        waterText:'',
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
        paths: ['waterText'],
        exclude: []
    }
})