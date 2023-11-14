import { defineStore } from 'pinia'
import {ElMessageBox,ElMessage,ElNotification} from 'element-plus'

export const useGetUserStore = defineStore('useGetUser', {
    state: () => ({
        username:'',
        password:'',
        userObj:{},
        istips:true,
    }),
    actions: {

    },
    persist: {
        paths: ['username','password'],
        exclude: []
    }
})